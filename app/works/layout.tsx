import { fetchWorkItems } from "../../utils/fetch-data";

export default async function Layout({ children }: { children: React.ReactNode }) {
  const items = await fetchWorkItems();

  return (
    <>
      {children}
      <footer className="text-center p-12 text-lg">
        &copy;2023 Yuta Sugimine
      </footer>
    </>
  );
}