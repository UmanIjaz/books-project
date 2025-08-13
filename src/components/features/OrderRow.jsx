import { FiCheckCircle, FiXCircle, FiClock } from "react-icons/fi";
import { cn } from "@/utils/cn";
import Button from "../ui/Button";

function getStatusIcon(status) {
  if (status === "Completed")
    return <FiCheckCircle className="text-green-500" title="Completed" />;
  if (status === "Pending")
    return <FiClock className="text-yellow-500" title="Pending" />;
  if (status === "Cancelled")
    return <FiXCircle className="text-red-500" title="Cancelled" />;
  return null;
}

function OrderRow({ order }) {
  return (
    <tr className={cn("last:border-b-0")}>
      <td
        className={cn(
          "px-4 py-3 text-left text-sm text-foreground border-b border-border",
          "max-[700px]:px-2 max-[700px]:py-2 max-[700px]:text-xs"
        )}
      >
        {order.id}
      </td>

      <td
        className={cn(
          "px-4 py-3 text-left text-sm text-foreground border-b border-border",
          "max-[700px]:px-2 max-[700px]:py-2 max-[700px]:text-xs"
        )}
      >
        {order.date}
      </td>

      <td
        className={cn(
          "px-4 py-3 text-left text-sm text-foreground border-b border-border",
          "max-[700px]:px-2 max-[700px]:py-2 max-[700px]:text-xs"
        )}
      >
        {order.items}
      </td>

      <td
        className={cn(
          "px-4 py-3 text-left text-sm text-foreground border-b border-border",
          "max-[700px]:px-2 max-[700px]:py-2 max-[700px]:text-xs"
        )}
      >
        ${order.total.toFixed(2)}
      </td>

      <td
        className={cn(
          "px-4 py-3 text-left text-sm text-foreground border-b border-border",
          "max-[700px]:px-2 max-[700px]:py-2 max-[700px]:text-xs"
        )}
      >
        {order.payment}
      </td>

      <td
        className={cn(
          "px-4 py-3 text-left text-sm text-foreground border-b border-border",
          "max-[700px]:px-2 max-[700px]:py-2 max-[700px]:text-xs"
        )}
      >
        <Button size="sm">View</Button>
      </td>
    </tr>
  );
}

export default OrderRow;
