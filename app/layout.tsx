/**
 * # app/layout.tsx
 * * Define el layout principal de la aplicación 
 *   Incluye: proveedor de temas, barra de navegación y contenido principal.
 */

import { ThemeProvider } from "@/app/_styles/components/theme/theme-provider"
import type { Metadata } from "next";
import { Navbar } from "@/app/_styles/components/layout/navbar";
import { Footer } from "@/app/_styles/components/layout/footer";
import "@/app/_styles/globals.css";
import { ConvexClientProvider } from "@/app/_styles/components/ConvexClientProvider";

export const metadata: Metadata = {
  title: "Sistema de Gestión de Estudiantes y Maestros",
  description: "Plataforma para la administración de estudiantes y maestros",
  icons: {
    icon: "/favicon.ico",
  },
};

type RootLayoutProps = Readonly<{
  children: React.ReactNode;
}>;

export default function RootLayout({ children }: RootLayoutProps): React.ReactElement {
  return (
      <html lang="es" suppressHydrationWarning>
        <head />
        <body className="min-h-screen bg-background font-sans antialiased">

          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <div className="relative flex min-h-screen flex-col">
              <ConvexClientProvider>
                <Navbar />
                <main className="flex-1">{children}</main>
                <Footer />
              </ConvexClientProvider>
            </div>
          </ThemeProvider>

        </body>
      </html>
  );
}
