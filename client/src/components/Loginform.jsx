import { useForm } from "react-hook-form";
import axios from "axios";
import { useState, useContext } from "react";
import { UserContext } from "../contexts/UserContext";
import { useNavigate } from "react-router-dom";

const API_URL = import.meta.env.VITE_API_URL;

const LoginForm = () => {
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const { setuser } = useContext(UserContext);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (formdata) => {
    setLoading(true);
    try {
      const response = await axios.post(`${API_URL}/auth/login`, formdata, {
        withCredentials: true,
      });
      setuser(response.data.data);
      setError("");
      navigate("/");
    } catch (error) {
      setError(error.response?.data?.message || "Login failed");
      setuser(null);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 bg-white p-8 rounded-xl shadow-lg">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-dark">
            Sign in to your account
          </h2>
        </div>

        {error && (
          <div className="bg-red-50 border-l-4 border-red-500 p-4">
            <div className="flex">
              <div className="ml-3">
                <p className="text-sm text-red-700">{error}</p>
              </div>
            </div>
          </div>
        )}

        <form className="mt-8 space-y-6" onSubmit={handleSubmit(onSubmit)}>
          <div className="rounded-md shadow-sm space-y-4">
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email address
              </label>
              <input
                id="email"
                {...register("email", { required: "Email is required" })}
                type="email"
                autoComplete="email"
                className="input-field mt-1"
                placeholder="Email address"
              />
              {errors.email && (
                <p className="text-red-500 text-sm">{errors.email.message}</p>
              )}
            </div>
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700"
              >
                Password
              </label>
              <input
                id="password"
                {...register("password", { required: "Password is required" })}
                type="password"
                autoComplete="current-password"
                className="input-field mt-1"
                placeholder="Password"
              />
              {errors.password && (
                <p className="text-red-500 text-sm">
                  {errors.password.message}
                </p>
              )}
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="btn-primary w-full flex justify-center py-2 px-4"
              disabled={loading}
            >
              {loading ? (
                <>
                  <svg
                    className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                  Signing in...
                </>
              ) : (
                "Sign in"
              )}
            </button>
          </div>
        </form>

        <div className="text-center text-sm text-gray-600">
          Don't have an account?{" "}
          <a
            href="/users/signup"
            className="font-medium text-primary hover:text-primary/80"
          >
            Sign up
          </a>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
