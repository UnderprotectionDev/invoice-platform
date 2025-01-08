import { requireUser } from "../utils/hooks";

export default async function DashboardRoute() {
  const session = await requireUser();

  return <div>hello from the dashboard route</div>;
}
