import { wait } from "@/lib/wait";
export default async function ArticlesPage() {
  await wait(6000);
  return <h2>Articles</h2>;
}
