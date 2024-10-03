import { ThemeProvider } from "@/hooks/ThemeProvider";
import { CustomAuthLayout } from "@/layouts/custom/auth";
import { DefaultAuthLayout } from "@/layouts/default/auth";
import "@/styles/globals.css";
import { headers } from "next/headers";
import { Toaster } from 'react-hot-toast';

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {

  const headersList = headers();
  const layoutType = headersList.get("x-layout-type") || "default"; // Pega o valor do cabeçalho

  return (
    <html lang="pt_BR">
      <body>
        <Toaster
          position="top-right"
          reverseOrder={false}
        />
        <ThemeProvider>
          {layoutType === "default" ? (
            <DefaultAuthLayout>{children}</DefaultAuthLayout>
          ) : (
            <CustomAuthLayout>{children}</CustomAuthLayout>
          )}
        </ThemeProvider>
      </body>
    </html>
  );
}


