import { NavBar } from "@/components/common/app/navbar";
import { Sidebar } from "@/components/common/app/sidebar";
import { SidebarProvider } from "@/hooks/SidebarProvider";
import { ThemeProvider } from "@/hooks/ThemeProvider";
import "@/styles/globals.css";
import { ReactNode } from "react";
import { Toaster } from 'react-hot-toast';

export default function RootLayout({ children }: { children: ReactNode }) {
  //const { theme } = useTheme();

  return (
    <html lang="pt_BR">
      <body className="dark"> {/* className={theme}> */}
        <Toaster position="top-right" reverseOrder={false} />
        <SidebarProvider>
          <ThemeProvider>
            <div className={`flex h-full min-h-screen bg-slate-50 dark:bg-neutral-900`}>
              <Sidebar />
              <div className="flex-1">
                <NavBar />
                <div className="flex-1">{children}</div>
              </div>
            </div>
          </ThemeProvider>
        </SidebarProvider>
      </body>
    </html>
  );
}
