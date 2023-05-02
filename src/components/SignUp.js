import axios from "axios";
import React, { useEffect } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

export default function SignUp() {
  let navigate = useNavigate();

  // useEffect(() => {
  //   debugger;
  //   const auth = localStorage.getItem("user");
  //   if (auth) {
  //     navigate("/");
  //   }
  // });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  async function OnSubmit(data) {
    let payload = {
      name: data.fullName,
      email: data.email,
      password: data.password,
    };
    axios
      .post("http://localhost:3002/register", payload)
      .then(function (response) {
        console.log(response.data);
        localStorage.setItem("user", JSON.stringify(response.data));
        navigate("/");
      });
  }
  return (
    <>
      <div className="container">
        <Form onSubmit={handleSubmit(OnSubmit)}>
          <Row className="justify-content-center mt-4">
            <Col md={4}>
              <Form.Group className="mb-3">
                <h1>Register</h1>
                <Form.Label className="d-flex">Full Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter Name"
                  {...register("fullName", { required: true })}
                />

                {errors.fullName && (
                  <p className="d-flex text-danger"> Name is required.</p>
                )}
              </Form.Group>
            </Col>
          </Row>

          <Row className="justify-content-center">
            <Col md={4}>
              <Form.Group className="mb-3">
                <Form.Label className="d-flex">Email address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter email"
                  {...register("email", { required: true })}
                />
                {errors.email && (
                  <p className="d-flex text-danger">Email is required.</p>
                )}
                <Form.Text className="text-muted d-flex">
                  We'll never share your email with anyone else.
                </Form.Text>
              </Form.Group>
            </Col>
          </Row>

          <Row className="justify-content-center">
            <Col md={4}>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label className="d-flex">Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Password"
                  {...register("password", { required: true })}
                />
                {errors.password && (
                  <p className="d-flex text-danger">Password is required.</p>
                )}
              </Form.Group>
              <Form.Group className=" d-flex" controlId="formBasicCheckbox">
                <Form.Check
                  type="checkbox"
                  label="Check me out"
                  {...register("checkbox", { required: true })}
                />
              </Form.Group>
              {errors.checkbox && (
                <p className="d-flex text-danger">Check the box.</p>
              )}
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
                  Submit
                </Button>
              </div>
            </Col>
          </Row>
        </Form>
      </div>
    </>
  );
}
