import axios from "axios";
import React from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import { useForm } from "react-hook-form";

export default function AddProduct() {
  const auth = JSON.parse(localStorage.getItem("user"));

  console.log("athent", auth);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  async function OnSubmit(data) {
    debugger;
    let payload = {
      userId: auth._id,
      name: data.productName,
      price: data.price,
      category: data.category,
      company: data.company,
    };
    axios
      .post("http://localhost:3002/add-product", payload)
      .then(function (response) {
        console.log(response.data);
      });
  }
  return (
    <>
      <div className="container">
        <div>
          <customFilter />
        </div>
        <Form onSubmit={handleSubmit(OnSubmit)}>
          <Row className="justify-content-center mt-4">
            <Col md={4}>
              <Form.Group className="mb-3">
                <h1>Add Product</h1>
                <Form.Label className="d-flex">Product Name</Form.Label>
                <Form.Control
                  type="text"
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
                  Add Product
                </Button>
              </div>
            </Col>
          </Row>
        </Form>
      </div>
    </>
  );
}
