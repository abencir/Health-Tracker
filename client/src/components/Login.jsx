import React from "react";

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
          <div className="rounded-md shadow-sm space-y-4">
            <div>
              <input
                type="email"
                name="email"
                autoComplete="email"
                required
                className="appearance-none relative block w-full px-3 py-3 border border-[#3e8e41] rounded-lg placeholder-gray-400 focus:outline-none focus:ring-[#3e8e41] focus:border-[#3e8e41] focus:z-10 sm:text-s"
                placeholder="Email"
              />
            </div>
            <div>
              <input
                type="password"
                name="password"
                autoComplete="current-password"
                required
                className="appearance-none relative block w-full px-3 py-3 border border-[#3e8e41] rounded-lg placeholder-gray-400 focus:outline-none focus:ring-[#3e8e41] focus:border-[#3e8e41] focus:z-10 sm:text-sm"
                placeholder="Password"
              />
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="text-sm">
              <a
                href="#"
                className="font-medium text-[#3e8e41] hover:text-[#2a6f29]"
              >
                Forgot password?
              </a>
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-lg text-white bg-[#3e8e41] hover:bg-[#2a6f29] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#3e8e41]"
            >
              Log in
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;