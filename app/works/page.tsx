import { Sidebar } from "../components/global/sidebar";

export default function Works() {
  return (
    <main className="w-full lg:flex">
      <div className="lg:w-1/4">
        <Sidebar />
      </div>
      <div className="flex w-screen justify-center lg:w-3/4">blog</div>
    </main>
  );
}
