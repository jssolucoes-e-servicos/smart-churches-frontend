'use client'; // Declarar explicitamente como Client Component
import { useState, useEffect, Fragment } from 'react';
import { useTheme } from '@/hooks/ThemeProvider';
import { Toaster } from 'react-hot-toast';
import { NavBar } from '@/components/common/app/navbar';

export function ClientSideNavBar() {
  const { theme, toggleTheme } = useTheme();
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  useEffect(() => {
    document.documentElement.className = theme;
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);
  const handleThemeToggle = () => toggleTheme();

  return (
    <Fragment>
      <Toaster position="top-right" reverseOrder={false} />
      <NavBar
        toggleSidebar={toggleSidebar}
        isOpen={isSidebarOpen}
        onThemeToggle={handleThemeToggle}
        theme={theme}
      />
    </>
  );
}
