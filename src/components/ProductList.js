import axios from "axios";
import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import { AiOutlineDelete } from "react-icons/ai";
import { FiEdit } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
export default function ProductList() {
  const [products, setProducts] = useState([""]);
  const navigate = useNavigate();
  useEffect(() => {
    getProductList();
  }, []);
  function getProductList() {
    axios.get("http://localhost:3002/productList").then(function (res) {
      setProducts(res.data);
    });
  }
  function updateProduct(id) {
    navigate("/update/" + id);
  }
  async function removeProduct(id) {
    debugger;
    axios.delete(`http://localhost:3002/product/${id}`).then(function (result) {
      if (result) {
        getProductList();
      }
    });
  }
  return (
    <>
      <div className="container mt-4">
        <h1>Product List</h1>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>UserId</th>
              <th>Name</th>
              <th>Price</th>
              <th>Category</th>
              <th>Company</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {products?.map((item, index) => {
              return (
                <tr>
                  <td>{item.userId}</td>
                  <td>{item.name}</td>
                  <td>{item.price}</td>
                  <td>{item.category}</td>
                  <td>{item.company}</td>
                  <td>
                    <FiEdit
                      fill="darkturquoise"
                      className="me-2"
                      style={{ cursor: "pointer" }}
                      onClick={() => updateProduct(item._id)}
                    />
                    <AiOutlineDelete
                      fill="red"
                      style={{ cursor: "pointer" }}
                      onClick={() => removeProduct(item._id)}
                    />
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </div>
    </>
  );
}
