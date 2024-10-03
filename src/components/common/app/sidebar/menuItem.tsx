"use client"
import Link from "next/link";

type MenuItemProps = {
    title: string;
    route: string;
    icon: ReactNode;
    activeLink: string | null;
    handleLinkClick: (link: string) => void;
    closeAllSubmenus: () => void;
  };
  
  export function MenuItem({
    title,
    route,
    icon,
    activeLink,
    handleLinkClick,
    closeAllSubmenus,
  }: MenuItemProps) {
    const uri = route === '/' ? '' : route;
    return (
      <Link
        href={`/app/${uri}`}
        onClick={() => {
          closeAllSubmenus();
          handleLinkClick(route);
        }}
        className={`text-sm dark:text-white text-zinc-800 hover:bg-gray-200 dark:hover:bg-zinc-800 hover:text-zinc-600 font-medium mb-1 py-3 pl-2 rounded-md w-full flex items-center transition-all duration-300 ${
          activeLink === `/app/${uri}` ? "text-white bg-sky-700" : ""
        }`}
      >
        {icon}
        {title}
      </Link>
    );
  };
  