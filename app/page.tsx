"use client";

import React, { useState } from "react";
import { Toaster, toast } from "react-hot-toast";

export default function Home() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    toast.success("Form Submitted!");
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black">
      <Toaster />
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md p-8 bg-black/60 shadow-lg rounded-xl border border-gray-700 backdrop-blur-lg"
      >
        <h2 className="text-3xl font-bold mb-6 text-center text-white neon-text">
          Futuristic Form
        </h2>

        {/* First Name */}
        <div className="mb-6">
          <label
            className="block text-gray-400 text-sm font-semibold mb-2"
            htmlFor="firstName"
          >
            First Name
          </label>
          <input
            id="firstName"
            name="firstName"
            type="text"
            value={formData.firstName}
            onChange={handleChange}
            className="w-full px-4 py-2 border-none rounded-lg shadow-sm text-white bg-gray-900/70 neon-input focus:outline-none focus:ring-2 focus:ring-cyan-500"
            required
          />
        </div>

        {/* Last Name */}
        <div className="mb-6">
          <label
            className="block text-gray-400 text-sm font-semibold mb-2"
            htmlFor="lastName"
          >
            Last Name
          </label>
          <input
            id="lastName"
            name="lastName"
            type="text"
            value={formData.lastName}
            onChange={handleChange}
            className="w-full px-4 py-2 border-none rounded-lg shadow-sm text-white bg-gray-900/70 neon-input focus:outline-none focus:ring-2 focus:ring-cyan-500"
            required
          />
        </div>

        {/* Email */}
        <div className="mb-6">
          <label
            className="block text-gray-400 text-sm font-semibold mb-2"
            htmlFor="email"
          >
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-2 border-none rounded-lg shadow-sm text-white bg-gray-900/70 neon-input focus:outline-none focus:ring-2 focus:ring-cyan-500"
            required
          />
        </div>

        {/* Phone */}
        <div className="mb-6">
          <label
            className="block text-gray-400 text-sm font-semibold mb-2"
            htmlFor="phone"
          >
            Phone
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            value={formData.phone}
            onChange={handleChange}
            className="w-full px-4 py-2 border-none rounded-lg shadow-sm text-white bg-gray-900/70 neon-input focus:outline-none focus:ring-2 focus:ring-cyan-500"
            required
          />
        </div>

        {/* Submit Button */}
        <div className="flex items-center justify-between">
          <button
            type="submit"
            className="w-full py-2 px-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold rounded-lg hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-blue-500 neon-btn"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
