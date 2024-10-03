'use client';

import Link from "next/link";
import { usePathname } from 'next/navigation';
import { JSX, useEffect, useState } from "react";

interface BreadcrumbProps {
  pageName: string;
}

export default function Breadcrumb({ pageName }: BreadcrumbProps) {
  const [pathParts, setPathParts] = useState<string[]>([]);
  const pathname = usePathname();

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const parts = pathname.split('/').filter((part) => part);
      setPathParts(parts);
    }
  }, [pathname]);

  const generateBreadcrumbItems = () => {
    const breadcrumbItems: JSX.Element[] = [];
    let path = '';

    pathParts.forEach((part, index) => {
      path += `/${part}`;
      breadcrumbItems.push(
        <>
          <Link key={path} href={path} className="flex flex-row gap-2 dark:hover:text-sky-100">
            <li className={`capitalize font-bold ${index === 0 ? 'text-sky-700' : 'text-neutral-500'} dark:${index === 0 ? 'text-sky-700' : 'text-white'}`}>
              {decodeURIComponent(part)}
            </li>
          </Link>
          {index !== pathParts.length - 1 && (
            <span className={`font-bold ${index === 0 ? 'text-sky-700' : 'text-neutral-500'} dark:${index === 0 ? 'text-sky-700' : 'text-white'}`}>
              {" | "}
            </span>
          )}
        </>
      );
    });

    return breadcrumbItems;
  };

  return (
    <div className="mb-0 flex flex-col gap-3 h-9 pl-4 sm:flex-row sm:items-center sm:justify-between dark:bg-[#202020] bg-white border border-transparent border-b-stone-200 dark:border-b-stone-800">
      <nav className="">
        <ol className="flex items-center gap-2">
          {generateBreadcrumbItems()}
        </ol>
      </nav>
    </div>
  );
};