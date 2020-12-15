import React, { Component } from "react";
import { Input } from "@windmill/react-ui";

class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  onSubmit = () => {
    this.props.formHandle("register");
  };
  render() {
    return (
      <div
        style={{ minHeight: "90vh" }}
        class="flex items-center justify-center px-4 sm:px-6 lg:px-8"
      >
        <div className="form max-w-md w-full space-y-12 -mt-48">
          <div>
            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
              Sign in to your account
            </h2>
          </div>
          <form className="mt-8 space-y-10" action="#" method="POST">
            <Input type="hidden" name="remember" value="true" />
            <div className="rounded-md shadow-sm -space-y-px">
              <div>
                <label for="email-address" class="sr-only">
                  Email address
                </label>

                <Input
                  id="email-address"
                  name="email"
                  type="email"
                  autocomplete="email"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-gray-500 focus:border-gray-500 focus:z-10 sm:text-sm"
                  placeholder="Email address"
                />
              </div>
              <div>
                <label for="password" className="sr-only">
                  Password
                </label>
                <Input
                  id="password"
                  name="password"
                  type="password"
                  autocomplete="current-password"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-gray-500 focus:border-gray-500 focus:z-10 sm:text-sm"
                  placeholder="Password"
                />
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <div className="text-sm">
                  <a
                    onClick={this.onSubmit}
                    href="#"
                    className="font-medium text-gray-600 hover:text-gray-500"
                  >
                    Don't have an account? Register
                  </a>
                </div>
              </div>

              <div class="text-sm">
                <a
                  href="#"
                  class="font-medium text-gray-600 hover:text-gray-500"
                >
                  Forgot your password?
                </a>
              </div>
            </div>

            <div>
              <button
                type="submit"
                class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-gray-600 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
              >
                <span class="absolute left-0 inset-y-0 flex items-center pl-3">
                  <svg
                    class="h-5 w-5 text-gray-500 group-hover:text-gray-400"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </span>
                Sign in
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default LoginForm;
