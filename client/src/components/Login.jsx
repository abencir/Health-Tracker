import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#eaf4f4]">
      <div className="max-w-md w-full space-y-8 p-8 rounded-xl shadow-lg bg-white">
        <div>
          <h3 className="mt-6 text-center text-3xl font-extrabold text-[#3e8e41]">
            FitTracker
          </h3>
        </div>
        <form className="mt-8 space-y-6" action="#" method="POST">
          <div className="space-y-4">
            <input
              type="email"
              name="email"
              autoComplete="email"
              required
              className="w-full px-3 py-3 border border-[#3e8e41] rounded-lg placeholder-gray-400 focus:outline-none focus:ring-[#3e8e41]"
              placeholder="Email"
            />
            <input
              type="password"
              name="password"
              autoComplete="current-password"
              required
              className="w-full px-3 py-3 border border-[#3e8e41] rounded-lg placeholder-gray-400 focus:outline-none focus:ring-[#3e8e41]"
              placeholder="Password"
            />
          </div>

          <div className="flex items-center justify-between text-sm">
            <Link to="/register" className="text-[#3e8e41] hover:underline">
              Create an account
            </Link>
            <a href="#" className="text-[#3e8e41] hover:underline">
              Forgot password?
            </a>
          </div>

          <button
            type="submit"
            className="w-full py-3 px-4 bg-[#3e8e41] hover:bg-[#2a6f29] text-white rounded-lg"
          >
            Log in
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;