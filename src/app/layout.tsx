
"use client"
import { ThemeProvider } from "@/hooks/ThemeProvider";
import "@/styles/globalsfront.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {


  return (
    <html lang="pt-br">
      <ThemeProvider>
        <body>
          {children}
        </body>
      </ThemeProvider>
    </html>
  );
}
