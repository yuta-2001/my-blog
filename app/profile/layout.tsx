export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {children}
      <footer className="text-center p-12 text-lg">
        &copy;2024 Yuta Sugimine
      </footer>
    </>
  );
}