import Link from "next/link";

export default function HomePage() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-6 bg-slate-100">

      <img
        src="/logo.png"
        className="w-40 mb-6"
      />

      <h1 className="text-4xl font-bold text-blue-900 text-center">
        Bệnh viện Quân Y 105
      </h1>

      <p className="text-slate-600 mt-2 mb-10">
        Hệ thống thang điểm tâm thần kinh
      </p>

      <Link
        href="/beck"
        className="bg-blue-700 text-white px-8 py-4 rounded-2xl font-semibold"
      >
        Vào thang điểm Beck
      </Link>
    </main>
  );
}
