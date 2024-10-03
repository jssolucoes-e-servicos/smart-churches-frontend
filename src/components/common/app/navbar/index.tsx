"use client"
import { FaBars } from "react-icons/fa";
import { FaBarsStaggered } from "react-icons/fa6";

import { UserDropdown } from "@/components/common/app/navbar/userDropdown";
import { useSidebar } from "@/hooks/SidebarProvider";
import { useTheme } from "@/hooks/ThemeProvider";

export function NavBar() {
  const { isSidebarOpen, toggleSidebar } = useSidebar();
  const { toggleTheme, theme } = useTheme();

  return (
    <div className="col-span-full h-[64px] lg:h-[64px] px-4 lg:pr-8 bg-rose-700 dark:bg-neutral-800  border border-transparent border-b-stone-700 flex items-center justify-between">
      <div className="flex justify-between items-center w-140">
        <button
          className="py-4 pl-4 col-span-full h-[72px] lg:h-[70px] px-4 lg:pr-8  border border-transparent  flex items-center justify-between"
          onClick={toggleSidebar}
          style={{ position: "relative" }}
        >
          {isSidebarOpen ? <FaBarsStaggered /> : <FaBars />}
        </button>
      </div>
      <div className="flex justify-center items-center gap-3">
        <UserDropdown />
        {/* <button
          onClick={toggleTheme}
          className="p-3 rounded-full text-white hover:text-neutral-700 "
        >
          {theme === "dark" ? <FaSun size={18} /> : <FaMoon size={18} />}
        </button> */}
      </div>
    </div>
  );
};
