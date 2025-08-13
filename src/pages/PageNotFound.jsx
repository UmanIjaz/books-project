import { useNavigate } from "react-router-dom";
import { Button } from "../components";
import { cn } from "@/utils/cn";

function PageNotFound() {
  const navigate = useNavigate();

  return (
    <div
      className={cn(
        "min-h-[60vh] flex flex-col items-center justify-center gap-6"
      )}
    >
      <h1 className={cn("text-8xl font-black text-primary mb-2")}>404</h1>

      <p className={cn("text-xl text-muted mb-5")}>Page Not Found</p>

      <Button
        variant="outline"
        size="lg"
        onClick={() => navigate("/")}
        className={cn("px-9 text-lg")}
      >
        Go to Home
      </Button>
    </div>
  );
}

export default PageNotFound;
