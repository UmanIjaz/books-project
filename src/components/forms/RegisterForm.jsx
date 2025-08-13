import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { toast } from "../toast/toast";
import { useState } from "react";
import { Spinner } from "../";
import { useAuth } from "../../contexts/AuthContext";
import { cn } from "@/utils/cn";

function RegisterForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: "Uman",
      email: "umanijaz5@gmail.com",
      password: "Uman@123",
    },
  });

  const navigate = useNavigate();
  const { register: registerUser } = useAuth();

  const onRegister = async (formData) => {
    setIsSubmitting(true);
    const { success, error, message } = await registerUser(formData);

    if (!success) {
      toast(error || "Signup failed", "error");
    } else {
      toast(message, "success");
      navigate("/login");
    }

    setIsSubmitting(false);
  };

  return (
    <form
      className={cn("flex flex-col gap-3")}
      autoComplete="off"
      onSubmit={handleSubmit(onRegister)}
    >
      <fieldset className="border-none p-0 m-0">
        <legend className={cn("text-xl font-semibold text-foreground mb-4")}>
          Register
        </legend>

        {/* Name */}
        <div className={cn("flex flex-col gap-1 mb-3")}>
          <label
            htmlFor="name"
            className={cn("text-base text-muted font-medium")}
          >
            Name
          </label>
          <input
            type="text"
            id="name"
            className={cn(
              "px-4 py-3 rounded border border-border text-base w-full",
              "bg-background text-foreground",
              "focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent",
              "disabled:opacity-50 disabled:cursor-not-allowed",
              "transition-colors duration-200",
              errors.name && "border-red-500 focus:ring-red-500"
            )}
            placeholder="Enter your name"
            {...register("name", {
              required: "Name is required",
              minLength: {
                value: 3,
                message: "Name must be at least 3 characters",
              },
              pattern: {
                value: /^[A-Za-z\s]+$/,
                message: "Only letters and spaces allowed",
              },
            })}
            disabled={isSubmitting}
          />
          {errors.name && (
            <p className={cn("leading-none text-sm text-red-600")}>
              {errors.name.message}
            </p>
          )}
        </div>

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
              "px-4 py-3 rounded border border-border text-base w-full",
              "bg-background text-foreground",
              "focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent",
              "disabled:opacity-50 disabled:cursor-not-allowed",
              "transition-colors duration-200",
              errors.email && "border-red-500 focus:ring-red-500"
            )}
            placeholder="Enter your email"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/,
                message: "Invalid email format",
              },
            })}
            disabled={isSubmitting}
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
              "px-4 py-3 rounded border border-border text-base w-full",
              "bg-background text-foreground",
              "focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent",
              "disabled:opacity-50 disabled:cursor-not-allowed",
              "transition-colors duration-200",
              errors.password && "border-red-500 focus:ring-red-500"
            )}
            placeholder="Enter your password"
            autoComplete="current-password"
            {...register("password", {
              required: "Password is required",
              minLength: {
                value: 8,
                message: "Password must be at least 8 characters",
              },
              pattern: {
                value: /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)/,
                message:
                  "Password must contain uppercase, lowercase, and a number",
              },
            })}
            disabled={isSubmitting}
          />
          {errors.password && (
            <p className={cn("leading-none text-sm text-red-600")}>
              {errors.password.message}
            </p>
          )}
        </div>
      </fieldset>

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
        {isSubmitting ? <Spinner size="md" /> : "Sign Up"}
      </button>

      <div className={cn("flex gap-5")}>
        <Link
          to="/login"
          className={cn(
            "text-primary text-base no-underline font-medium",
            "transition-colors duration-200",
            "hover:opacity-80"
          )}
        >
          Login
        </Link>
      </div>

      {errors.root && (
        <p className={cn("leading-none text-sm text-red-600")}>
          {errors.root.message}
        </p>
      )}
    </form>
  );
}

export default RegisterForm;
