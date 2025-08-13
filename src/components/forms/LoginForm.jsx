import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { toast } from "../toast/toast";
import { Spinner } from "../";
import { useAuth } from "../../contexts/AuthContext";
import { useState } from "react";
import { cn } from "@/utils/cn";

function LoginForm() {
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { login } = useAuth();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "umanijaz5@gmail.com",
      password: "Uman@123",
    },
  });

  const handleLogin = async ({ email, password }) => {
    setIsSubmitting(true);

    const { success, error } = await login({ email, password });

    if (!success) {
      toast(error || "Login failed", "error");
    } else {
      navigate("/");
      toast("Sign-in successful", "success");
    }
    setIsSubmitting(false);
  };

  return (
    <form
      className={cn("flex flex-col gap-4")}
      autoComplete="off"
      onSubmit={handleSubmit(handleLogin)}
    >
      <fieldset className="border-none p-0 m-0">
        <legend className={cn("text-xl font-semibold text-foreground mb-4")}>
          Login
        </legend>

        {/* Email */}
        <div className={cn("flex flex-col gap-1 mb-3")}>
          <label
            htmlFor="email"
            className={cn("text-base text-muted font-medium")}
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            className={cn(
              "px-4 py-3 rounded border text-base w-full",
              "bg-background text-foreground",
              "focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent",
              "disabled:opacity-50 disabled:cursor-not-allowed",
              "transition-colors duration-200",
              errors.email
                ? "border-red-500 focus:ring-red-500"
                : "border-border"
            )}
            placeholder="Enter your email"
            autoComplete="email"
            disabled={isSubmitting}
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/,
                message: "Invalid email format",
              },
            })}
          />
          {errors.email && (
            <p className={cn("leading-none text-sm text-red-600")}>
              {errors.email.message}
            </p>
          )}
        </div>

        {/* Password */}
        <div className={cn("flex flex-col gap-1 mb-3")}>
          <label
            htmlFor="password"
            className={cn("text-base text-muted font-medium")}
          >
            Password
          </label>
          <input
            type="password"
            id="password"
            className={cn(
              "px-4 py-3 rounded border text-base w-full",
              "bg-background text-foreground",
              "focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent",
              "disabled:opacity-50 disabled:cursor-not-allowed",
              "transition-colors duration-200",
              errors.password
                ? "border-red-500 focus:ring-red-500"
                : "border-border"
            )}
            placeholder="Enter your password"
            autoComplete="current-password"
            disabled={isSubmitting}
            {...register("password", {
              required: "Password is required",
              minLength: {
                value: 8,
                message: "Password must be at least 8 characters",
              },
            })}
          />
          {errors.password && (
            <p className={cn("leading-none text-sm text-red-600")}>
              {errors.password.message}
            </p>
          )}
        </div>
      </fieldset>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={isSubmitting}
        className={cn(
          "flex justify-center items-center h-[45px]",
          "bg-primary text-white border-none rounded",
          "px-5 py-3 text-lg font-semibold cursor-pointer",
          "transition-colors duration-200",
          "hover:opacity-90 active:opacity-95",
          "disabled:opacity-50 disabled:cursor-not-allowed"
        )}
      >
        {isSubmitting ? <Spinner size="md" /> : "Sign In"}
      </button>

      {/* Root-level form error (fallback) */}
      {errors.root && (
        <p className={cn("leading-none text-sm text-red-600")}>
          {errors.root.message}
        </p>
      )}

      <nav className={cn("flex gap-5")}>
        <Link
          to="/register"
          className={cn(
            "text-primary text-base no-underline font-medium",
            "transition-colors duration-200",
            "hover:opacity-80"
          )}
        >
          Create account
        </Link>
      </nav>
    </form>
  );
}

export default LoginForm;
