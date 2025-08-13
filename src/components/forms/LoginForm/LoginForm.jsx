import styles from "./LoginForm.module.css";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { toast } from "../../toast/toast";
import { Spinner } from "../../";
import { useAuth } from "../../../contexts/AuthContext";
import { useState } from "react";

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
      className={styles.loginForm}
      autoComplete="off"
      onSubmit={handleSubmit(handleLogin)}
    >
      <fieldset>
        <legend>Login</legend>
        {/* Email */}
        <div className={styles.formGroup}>
          <label htmlFor="email" className={styles.label}>
            Email
          </label>
          <input
            type="email"
            id="email"
            className={`${styles.input} ${errors.email ? styles.error : ""}`}
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
            <p className={styles.error}>{errors.email.message}</p>
          )}
        </div>

        {/* Password */}
        <div className={styles.formGroup}>
          <label htmlFor="password" className={styles.label}>
            Password
          </label>
          <input
            type="password"
            id="password"
            className={`${styles.input} ${errors.password ? styles.error : ""}`}
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
            <p className={styles.error}>{errors.password.message}</p>
          )}
        </div>
      </fieldset>

      {/* Submit Button */}
      <button type="submit" disabled={isSubmitting} className={styles.loginBtn}>
        {isSubmitting ? <Spinner size="md" /> : "Sign In"}
      </button>

      {/* Root-level form error (fallback) */}
      {errors.root && <p className={styles.error}>{errors.root.message}</p>}

      <nav className={styles.links}>
        <Link to="/register" className={styles.link}>
          Create account
        </Link>
      </nav>
    </form>
  );
}

export default LoginForm;
