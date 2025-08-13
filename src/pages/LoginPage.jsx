import { LoginForm } from "../components";
import { cn } from "@/utils/cn";

function LoginPage() {
  return (
    <div
      className={cn(
        "min-h-screen flex items-center justify-center bg-background",
        "max-[900px]:flex-col"
      )}
    >
      <div
        className={cn(
          "flex-1 max-w-[420px] p-6 bg-surface rounded shadow-[0_2px_16px_rgba(80,80,180,0.08)]",
          "flex flex-col gap-4 m-4"
        )}
      >
        <h1 className={cn("text-3xl font-bold text-primary")}>
          Sign in to your account
        </h1>

        <p className={cn("text-lg text-muted mb-4")}>
          Access your dashboard, orders, and more.
        </p>

        <LoginForm />
      </div>
    </div>
  );
}

export default LoginPage;
