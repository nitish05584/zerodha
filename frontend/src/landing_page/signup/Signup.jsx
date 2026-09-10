import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      const response = await axios.post("https://zerodha-1-x3u4.onrender.com/api/signup", formData);
      setMessage(response.data.message || "Signup successful");
      setFormData({ name: "", email: "", password: "" });

      setTimeout(() => {
        navigate("/");
      }, 800);
    } catch (error) {
      setMessage(
        error.response?.data?.message || "Something went wrong while signing up"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-[70vh] bg-gray-50 py-16 px-4">
      <div className="mx-auto max-w-md rounded-xl border border-gray-200 bg-white p-8 shadow-sm">
        <h2 className="mb-2 text-3xl font-medium text-gray-800">Create account</h2>
        <p className="mb-6 text-sm text-gray-500">
          Open your Zerodha account in a few simple steps.
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="mb-1 block text-sm text-gray-600">Full Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full rounded-md border border-gray-300 px-3 py-2 outline-none focus:border-orange-500"
              placeholder="Enter your name"
              required
            />
          </div>

          <div>
            <label className="mb-1 block text-sm text-gray-600">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full rounded-md border border-gray-300 px-3 py-2 outline-none focus:border-orange-500"
              placeholder="Enter your email"
              required
            />
          </div>

          <div>
            <label className="mb-1 block text-sm text-gray-600">Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full rounded-md border border-gray-300 px-3 py-2 outline-none focus:border-orange-500"
              placeholder="Enter password"
              required
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-md bg-orange-500 px-4 py-3 text-sm font-medium text-white transition hover:bg-orange-600 disabled:opacity-60"
          >
            {loading ? "Submitting..." : "Signup"}
          </button>
        </form>

        {message && (
          <p className="mt-4 text-sm text-center text-gray-700">{message}</p>
        )}
      </div>
    </div>
  );
};

export default Signup;
