import React from "react";
import { Navigate, Outlet } from "react-router-dom";
// import SignUp from "./SignUp";

export default function PrivateComponent() {
  const auth = localStorage.getItem("user");
  console.log("auth", auth);
  return <>{auth ? <Outlet /> : <Navigate to="/signUp" />}</>;
}
