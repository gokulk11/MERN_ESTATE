import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const SignUp = () => {
const [formData, setFormData] = useState({})
function handleChange(e){
    setFormData(
      {
        ...formData,
        [e.target.id]:e.target.value
      }
    )
}

const handleSubmit = async (e) => {
  e.preventDefault();

  try {
      const res = await axios.post('/api/auth/signup', formData, {
          headers: {
              'Content-Type': 'application/json',
          },
      });

      console.log(res.data);
      // You can handle the response data as needed
  } catch (error) {
      console.error('Error:', error);
      // Handle errors here
  }
};
  return (
    <div className="p-3 max-w-lg mx-auto">
      <h1 className="text-3xl text-center font-semibold my-7">Sign Up</h1>
      <form onSubmit={handleSubmit} action="" className="flex flex-col gap-4">
        <input
          type="text"
          placeholder="username"
          className="border p-3 rounded-lg"
          id="username"
          onChange={handleChange}
        />
        <input
          type="email"
          placeholder="email"
          className="border p-3 rounded-lg"
          id="email"
          onChange={handleChange}
        />
        <input
          type="password"
          placeholder="password"
          className="border p-3 rounded-lg"
          id="password"
          onChange={handleChange}
        />
        <button className="bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-80">
          SignUp
        </button>
      </form>
      <div className="flex gap-2 mt-5 justify-center">
        <p>Have an account?</p>
        <Link to="/signin">
        <span className="text-blue-700">Sign in</span>
        </Link>
      </div>
    </div>
  );
};

export default SignUp;
