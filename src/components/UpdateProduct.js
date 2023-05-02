import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";

export default function UpdateProduct() {
  const auth = JSON.parse(localStorage.getItem("user"));
  const [updateProduct, setUpdateProduct] = useState();
  console.log("athent", auth);
  let param = useParams();
  let navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  useEffect(() => {
    axios
      .get(`http://localhost:3002/product/${param.id}`)
      .then(function (response) {
        console.log(response.data);
        setUpdateProduct(response.data);
      });
  }, []);
  async function OnSubmit(data) {
    let payload = {
      userId: auth._id,
      name: data.productName,
      price: data.price,
      category: data.category,
      company: data.company,
    };
    axios
      .put(`http://localhost:3002/product/${param.id}`, payload)
      .then(function (response) {
        if (response) {
          navigate("/");
        }
      });
  }
  return (
    <>
      <div className="container">
        <Form onSubmit={handleSubmit(OnSubmit)}>
          <Row className="justify-content-center mt-4">
            <Col md={4}>
              <Form.Group className="mb-3">
                <h1>Update Product</h1>
                <Form.Label className="d-flex">Product Name</Form.Label>
                <Form.Control
                  type="text"
                  defaultValue={updateProduct?.name}
                  placeholder="Product Name"
                  {...register("productName", { required: true })}
                />

                {errors.productName && (
                  <p className="d-flex text-danger">
                    {" "}
                    productName is required.
                  </p>
                )}
              </Form.Group>
            </Col>
          </Row>

          <Row className="justify-content-center ">
            <Col md={4}>
              <Form.Group className="mb-3">
                <Form.Label className="d-flex">Price</Form.Label>
                <Form.Control
                  type="text"
                  defaultValue={updateProduct?.price}
                  placeholder="Enter Price"
                  {...register("price", { required: true })}
                />

                {errors.price && (
                  <p className="d-flex text-danger"> Price is required.</p>
                )}
              </Form.Group>
            </Col>
          </Row>
          <Row className="justify-content-center ">
            <Col md={4}>
              <Form.Group className="mb-3">
                <Form.Label className="d-flex">Category</Form.Label>
                <Form.Control
                  type="text"
                  defaultValue={updateProduct?.category}
                  placeholder="Enter Category"
                  {...register("category", { required: true })}
                />

                {errors.category && (
                  <p className="d-flex text-danger">Category is required.</p>
                )}
              </Form.Group>
            </Col>
          </Row>
          <Row className="justify-content-center ">
            <Col md={4}>
              <Form.Group className="mb-3">
                <Form.Label className="d-flex">Company</Form.Label>
                <Form.Control
                  type="text"
                  defaultValue={updateProduct?.company}
                  placeholder="Enter Company"
                  {...register("company", { required: true })}
                />

                {errors.company && (
                  <p className="d-flex text-danger">
                    Company Name is required.
                  </p>
                )}
              </Form.Group>
            </Col>
          </Row>

          <Row className="justify-content-center">
            <Col md={4}>
              <div className="d-flex mb-3 mt-2">
                <Button
                  variant="primary"
                  type="submit"
                  className="px-5 bg-info"
                >
                  Update Product
                </Button>
              </div>
            </Col>
          </Row>
        </Form>
      </div>
    </>
  );
}
