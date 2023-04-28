import React, { useState } from "react";
import { nclient } from "../config/client";
import { useNavigate } from "react-router-dom";

const AdminLoginPage = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      email,
      password,
    };
    nclient
      .post(`/admin/login`, data)
      .then((res) => {
        localStorage.setItem("admin_token", res.data.token);
        navigate("/admin");
      })
      .catch((err) => {
        alert("Incorrect Credentials");
        console.log(err);
      });
  };

  return (
    <div className="flex flex-col p-5 items-center">
      <h1 className="text-3xl font-bold mb-10">Admin Login</h1>
      <form className="w-1/2 flex flex-col items-center p-5">
        <input
          className="w-full p-2 border-2 border-gray-300 rounded-lg mb-2"
          type="text"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          className="w-full p-2 border-2 border-gray-300 rounded-lg mb-2"
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          onClick={handleSubmit}
          className="w-full p-2 border-2 border-gray-300 rounded-lg mb-2 bg-blue-500 text-white font-bold"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default AdminLoginPage;
