import React, { useState, useEffect } from "react";
export default function PopupWithSignIn() {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({ email: "", password: "" });

  // Show popup on page load
  useEffect(() => {
    setIsOpen(true);
  }, []);
 
  const closePopup = () => setIsOpen(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Email: ${formData.email}\nPassword: ${formData.password}`);
    setIsOpen(false); // Close the popup after submission
  };

  return (
    <div className="flex items-center justify-center min-h-screen">

      {/* Popup */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75">
          <div className="bg-purple-950 p-6 rounded-lg shadow-lg max-w-sm w-full relative">
            {/* Close Button */}
            {/* Sign-In Form */}
            <h2 className="text-2xl text-white font-semibold mb-4">Sign In</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Email Field */}
              <div>
                <label className="block text-white mb-1">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="Enter your email"
                  className="w-full px-4 py-2 border bg-gray-400 border-gray-300 rounded-md focus:outline-none placeholder-black focus:ring-2 focus:ring-purple-500"
                />
              </div>
              {/* Password Field */}
              <div>
                <label className="block text-white mb-1">Password</label>
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                  placeholder="Enter your password"
                  className="w-full px-4 py-2 border border-purple-900 rounded-md placeholder-black bg-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
              </div>
              {/* Submit Button */}
              <button
                type="submit"
                className="w-full px-4 py-2 bg-purple-900 text-white rounded-md hover:bg-purple-900"
              >
                Sign In
              </button>
              <h3 className="text-white">Don't Have an Account ? SignUp</h3>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
