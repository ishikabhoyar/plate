"use client";
import React, { useState } from 'react';
import { Eye, Mail } from 'lucide-react';

function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    svvNetId: '',
    password: '',
    rememberMe: false
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <div className="min-h-screen flex">
      {/* Left Side - Background Image */}
      <div className="w-1/2 relative">
        <img 
          src="/BG-login(2).jpg"
          className="absolute inset-0 w-full h-full object-cover"
        />
      </div>

      {/* Right Side - Login Form */}
      <div className="w-1/2 flex items-center justify-center p-8 bg-gray-50">
        <div className="w-full max-w-md">
          {/* Logos */}
          <div className="flex justify-center gap-4 mb-8">
            <img src="/university.png" alt="KJSCE" className="h-12" />
            <img src="/KJSCE.png" alt="Somaiya Vidyavihar" className="h-12" />
          </div>

          {/* Title */}
          <h1 className="text-2xl font-bold text-center text-gray-800 mb-2">
            Welcome To Monaco Editor
          </h1>
          <p className="text-center text-gray-600 mb-8">
            Please enter your SVV Net ID & password to Login.
          </p>

          {/* Form */}
          <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-xl">
            <div className="space-y-6">
              {/* SVV Net ID */}
              <div>
                <label htmlFor="svvNetId" className="block text-sm font-medium text-gray-700">
                  SVV Net ID <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="svvNetId"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500"
                  value={formData.svvNetId}
                  onChange={(e) => setFormData({...formData, svvNetId: e.target.value})}
                  required
                />
              </div>

              {/* Password */}
              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                  Password <span className="text-red-500">*</span>
                </label>
                <div className="mt-1 relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    id="password"
                    className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500"
                    value={formData.password}
                    onChange={(e) => setFormData({...formData, password: e.target.value})}
                    required
                  />
                  <button
                    type="button"
                    className="absolute inset-y-0 right-0 pr-3 flex items-center"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    <Eye className="h-5 w-5 text-gray-400" />
                  </button>
                </div>
              </div>

              {/* Remember Me & Forgot Password */}
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <input
                    id="remember-me"
                    type="checkbox"
                    className="h-4 w-4 text-red-600 focus:ring-red-500 border-gray-300 rounded"
                    checked={formData.rememberMe}
                    onChange={(e) => setFormData({...formData, rememberMe: e.target.checked})}
                  />
                  <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-700">
                    Remember Me
                  </label>
                </div>
                <a href="#" className="text-sm font-medium text-red-600 hover:text-red-500">
                  Forgot Password?
                </a>
              </div>

              {/* Login Button */}
              <button
                type="submit"
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-gray-700 hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
              >
                Login
              </button>

              {/* OR Divider */}
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-300"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-2 bg-white text-gray-500">OR</span>
                </div>
              </div>

              {/* Email Login Button */}
              <button
                type="button"
                className="w-full flex items-center justify-center gap-2 py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
              >
                <Mail className="h-5 w-5" />
                Login with Somaiya Email ID
              </button>
            </div>
          </form>

          {/* Trust Logo */}
          <div className="mt-8 flex justify-end">
            <img 
              src="/Bottom.png" 
              alt="Somaiya Trust" 
              className="h-8"
            />
          </div>
        </div>
      </div>
      {/* Footer */}
  <div className="absolute bottom-2 right-2 text-sm text-gray-500">
    ~ by Arnab Bhowmik 
    <br />
    &
    Ishika Bhoyar
  </div>
    </div>
  );
}

export default Login;