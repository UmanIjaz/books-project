import { Products } from "../components";
import { cn } from "../utils/cn";

function ProdcutsPage() {
  return (
    <div className={cn("flex flex-col gap-6")}>
      <h1 className={cn("text-3xl font-bold text-foreground mb-2")}>
        Products
      </h1>

      <Products />
    </div>
  );
}

export default ProdcutsPage;
