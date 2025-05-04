import { wait } from "@/lib/wait";
export default async function DashboardPage() {
  await wait(3000);
  return <h2>Students Dashboards</h2>;
}
