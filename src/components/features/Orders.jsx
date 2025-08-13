import OrderRow from "./OrderRow";
import { SearchBar, FilterDropdown, Button } from "../";
import { cn } from "@/utils/cn";

// Example data
const orders = [
  {
    id: "ORD-1001",
    customer: {
      name: "John Doe",
      avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    },
    date: "2025-07-08",
    status: "Pending",
    total: 129.99,
    items: 3,
    payment: "Credit Card",
  },
  {
    id: "ORD-1002",
    customer: {
      name: "Jane Smith",
      avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    },
    date: "2025-07-07",
    status: "Completed",
    total: 89.5,
    items: 1,
    payment: "PayPal",
  },
  {
    id: "ORD-1003",
    customer: {
      name: "Alice Brown",
      avatar: "https://randomuser.me/api/portraits/women/46.jpg",
    },
    date: "2025-07-06",
    status: "Cancelled",
    total: 0,
    items: 2,
    payment: "Credit Card",
  },
  {
    id: "ORD-1004",
    customer: {
      name: "Bob Lee",
      avatar: "https://randomuser.me/api/portraits/men/45.jpg",
    },
    date: "2025-07-05",
    status: "Completed",
    total: 59.99,
    items: 1,
    payment: "Debit Card",
  },
];

function Orders() {
  return (
    <section className={cn("w-full mx-auto")}>
      <div
        className={cn(
          "bg-surface rounded shadow-[0_2px_16px_rgba(108,99,255,0.06)] p-5"
        )}
      >
        <div className={cn("flex gap-2 my-4", "max-[480px]:flex-col")}>
          <SearchBar placeholder="Search orders..." />
          <FilterDropdown
            options={["All", "Pending", "Completed", "Cancelled"]}
          />
        </div>

        {/* Desktop Table */}
        <div className={cn("hidden md:block overflow-x-auto")}>
          <table className={cn("w-full border-collapse min-w-[700px]")}>
            <caption className="sr-only">Orders List</caption>
            <thead>
              <tr className={cn("bg-background")}>
                <th
                  className={cn(
                    "px-4 py-3 text-left text-base font-semibold text-muted border-b-2 border-border"
                  )}
                  scope="col"
                >
                  Order ID
                </th>
                <th
                  className={cn(
                    "px-4 py-3 text-left text-base font-semibold text-muted border-b-2 border-border"
                  )}
                  scope="col"
                >
                  Date
                </th>
                <th
                  className={cn(
                    "px-4 py-3 text-left text-base font-semibold text-muted border-b-2 border-border"
                  )}
                  scope="col"
                >
                  Items
                </th>
                <th
                  className={cn(
                    "px-4 py-3 text-left text-base font-semibold text-muted border-b-2 border-border"
                  )}
                  scope="col"
                >
                  Total
                </th>
                <th
                  className={cn(
                    "px-4 py-3 text-left text-base font-semibold text-muted border-b-2 border-border"
                  )}
                  scope="col"
                >
                  Payment
                </th>
                <th
                  className={cn(
                    "px-4 py-3 text-left text-base font-semibold text-muted border-b-2 border-border"
                  )}
                  scope="col"
                >
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order) => (
                <OrderRow key={order.id} order={order} />
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile Cards */}
        <div className={cn("md:hidden space-y-4")}>
          {orders.map((order) => (
            <div
              key={order.id}
              className={cn(
                "bg-background border border-border rounded-lg p-4 space-y-3"
              )}
            >
              <div className="flex justify-between items-start">
                <div>
                  <div className="font-semibold text-foreground text-sm">
                    {order.id}
                  </div>
                  <div className="text-xs text-muted">{order.date}</div>
                </div>
                <Button size="sm">View</Button>
              </div>

              <div className="grid grid-cols-2 gap-3 text-sm">
                <div>
                  <span className="text-muted">Items:</span>
                  <span className="text-foreground ml-1">{order.items}</span>
                </div>
                <div>
                  <span className="text-muted">Total:</span>
                  <span className="text-foreground ml-1 font-semibold">
                    ${order.total.toFixed(2)}
                  </span>
                </div>
                <div className="col-span-2">
                  <span className="text-muted">Payment:</span>
                  <span className="text-foreground ml-1">{order.payment}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Orders;
