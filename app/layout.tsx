export const metadata = {
  title: "Portal de Coaching",
  description: "Panel para coachees, sesiones y contratos",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body className="min-h-screen">
        {children}
      </body>
    </html>
  );
}
