import { Orders } from "../components";
import { cn } from "@/utils/cn";

function OrdersPage() {
  return (
    <div className={cn("flex flex-col gap-6")}>
      <h1 className={cn("text-3xl font-bold text-foreground mb-2")}>Orders</h1>

      <Orders />
    </div>
  );
}

export default OrdersPage;
