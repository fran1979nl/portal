import Link from "next/link";

export default function Home() {
  return (
    <main className="p-8 space-y-3">
      <h1 className="text-2xl font-bold">Portal de Coaching</h1>
      <p>Administra coachees, sesiones y contratos.</p>
      <Link className="underline" href="/dashboard">Ir al panel</Link>
    </main>
  );
}
