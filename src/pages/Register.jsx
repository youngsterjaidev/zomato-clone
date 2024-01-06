import React, { useState } from "react";
import axios from "axios";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    try {
      //prevent page from reloading
      e.preventDefault();
      console.log(email, password);
      const response = await axios("http://10.200.189.21:8000/register", {
        method: "POST",
        header: {
          "Content-Type": "application/json",
        },
        data: {
          username: username,
          email: email,
          password: password,
        },
      });
      console.log("Response:", response);
      setMessage(response.data.message);

      // reset the form for next use
      setUsername("");
      setEmail("");
      setPassword("");
    } catch (e) {
      //Error Handling
      console.log("Error Occured while form submitting:", e);
    }
  };
  return (
    <div className="flex justify-center items-center p-3 h-screen">
      <form onSubmit={handleSubmit} className="p-3 shadow-lg">
        <legend>{message}</legend>
        <div className="p-2">
          <input
            className="p-2 border border-solid border-slate-300 rounded-md focus:outline-2 focus:outline focus:outline-green-100"
            type="text"
            value={username}
            placeholder="username"
            required
            name="username"
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="p-2">
          <input
            className="p-2"
            type="email"
            value={email}
            placeholder="email"
            required
            name="email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="p-2">
          <input
            className="p-2"
            type="password"
            value={password}
            placeholder="password"
            required
            name="password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="p-2">
          <button className="p-2 brand text-white" type="submit">
            Register
          </button>
        </div>
      </form>
    </div>
  );
};
export default Register;
