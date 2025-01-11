import { DashboardBlocks } from "../components/dashboard-blocks";
import { InvoiceGraph } from "../components/invoice-graph";
import { RecentInvoices } from "../components/recent-invoices";
import { requireUser } from "../utils/hooks";

export default async function DashboardRoute() {
  const session = await requireUser();

  return (
    <div>
      <DashboardBlocks />
      <div className="grid gap-4 lg:grid-cols-3 md:gap-8">
        <InvoiceGraph />
        <RecentInvoices />
      </div>
    </div>
  );
}
