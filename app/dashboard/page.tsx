import Link from "next/link";

export default function Dashboard() {
  return (
    <main style={{ padding: 24 }}>
      <h1>Panel de Coach</h1>
      <nav style={{ display: "grid", gap: 8, marginTop: 12 }}>
        <Link href="/coachees">Coachees</Link>
        <Link href="/sessions">Sesiones</Link>
        <Link href="/contracts">Contratos</Link>
        <Link href="/invoices">Finanzas</Link>
      </nav>
    </main>
  );
}