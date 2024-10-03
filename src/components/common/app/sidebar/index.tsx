"use client";

import { getClientAuthenticatedAction } from "@/actions/users/get-client-authenticated.action";
import { MenuItem } from "@/components/common/app/sidebar/menuItem";
import { useSidebar } from "@/hooks/SidebarProvider";
import { useTheme } from "@/hooks/ThemeProvider";
import { IUser } from "@/interfaces";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { destroyCookie } from "nookies";
import { Fragment, useEffect, useState } from "react";
import {
  FaChevronDown,
  FaHome,
  FaServer,
  FaUser,
  FaWhatsapp
} from "react-icons/fa";


export function Sidebar() {
  const router = useRouter();
  const [userData, setUserData] = useState<IUser | null>(null);
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null);
  const [activeLink, setActiveLink] = useState<string | null>("/");

  const { toggleTheme } = useTheme();
  const { isSidebarOpen, forceChangeSidebar } = useSidebar();

  useEffect(() => {
    const fetchUserData = async () => {
      const data = getClientAuthenticatedAction();
      setUserData(data);
      console.clear();
      console.log(data);
    };
    fetchUserData();
  }, []);

  const handleLinkClick = (link: string) => {
    setActiveLink(link);
  };

  const toggleSubmenu = (submenuId: string) => {
    setActiveSubmenu((prevSubmenu) =>
      prevSubmenu === submenuId ? null : submenuId
    );
  };

  const isSubmenuOpen = (submenuId: string) => activeSubmenu === submenuId;

  const closeAllSubmenus = () => {
    setActiveSubmenu(null);
  };

  useEffect(() => {
    const handleResize = () => {
      const isMobile = window.innerWidth < 950;
      if (isMobile) {
        closeAllSubmenus();
        forceChangeSidebar(false);
      } else if (isSidebarOpen) {
        forceChangeSidebar(true);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [isSidebarOpen, forceChangeSidebar]);

  const handleLogout = () => {
    destroyCookie(undefined, "smartChurches.token");
    destroyCookie(undefined, "smartChurches.member");
    router.replace("/app/acesso");
  };

  return (
    <div
      className={`dark:bg-zinc-800 bg-white text-white ${isSidebarOpen ? "w-60" : "w-0"
        } flex flex-col transition-all duration-300 `}
    >
      <div
        className="py-4 pl-4 col-span-full h-[64px] lg:h-[64px] px-4 lg:pr-8 flex items-center justify-center"
        style={{ position: "relative" }}
      >
        <Image
          src="/storage/assets/images/logo-inline.png"
          alt="Logo"
          className="w-48 h-10"
          width={48} height={10} />
      </div>
      <div>
        <div className="p-4">
          {isSidebarOpen && (
            <Fragment>
              <div className="dark:bg-gray-800/15 bg-gray-100 parent-container rounded-lg py-1 pl-2 w-100 flex flex-col items-start justify-start md:flex-row hover:text-zinc-600 transition-all duration-300 mb-2 ">
                <div className="py-4 pl-4">
                  <p className="text-[12px] dark:text-gray-300 text-gray-500">
                    Conectado em
                  </p>
                  <p className="text-[14px] dark:text-gray-300 text-gray-500">
                    <span className="text-sky-700 dark:text-sky-700 font-bold">
                      {userData ? userData.church?.fantasy : "sincronizando..."}
                    </span>
                  </p>
                </div>
              </div>

              <MenuItem
                title="Dashboard"
                route="/"
                icon={<FaHome className="mr-2 text-zinc-400" />}
                activeLink={activeLink}
                closeAllSubmenus={closeAllSubmenus}
                handleLinkClick={handleLinkClick}
              />
              {/*               <MenuItem
                title="Pedidos"
                route="/comanda/pedido"
                icon={<FaList className="mr-2 text-zinc-400" />}
                activeLink={activeLink}
                closeAllSubmenus={closeAllSubmenus}
                handleLinkClick={handleLinkClick}
              /> */}


              <div
                className={`text-sm dark:text-white text-zinc-800 hover:bg-gray-200 dark:hover:bg-zinc-800 font-medium rounded-md mb-1 py-3 pl-2 w-full flex items-center cursor-pointer transition-all duration-300 ${isSubmenuOpen(4) ? "text-white bg-sky-700" : ""
                  }`}
                onClick={() => {
                  toggleSubmenu("cells");
                  handleLinkClick("#");
                }}
              >
                <FaServer className="mr-2" />
                Células
                <FaChevronDown className="py-1 pl-1 mr-2" />
              </div>
              {isSubmenuOpen("cells") && (
                <div className="pl-0 transition ease-in-out duration-500">
                  <MenuItem
                    title="Minha células"
                    route="celulas/minha"
                    icon={<FaHome className="mr-2 text-zinc-400" />}
                    activeLink={activeLink}
                    closeAllSubmenus={closeAllSubmenus}
                    handleLinkClick={handleLinkClick}
                  />
                  <MenuItem
                    title="Relatório de Célula"
                    route="celulas/relatorio"
                    icon={<FaHome className="mr-2 text-zinc-400" />}
                    activeLink={activeLink}
                    closeAllSubmenus={closeAllSubmenus}
                    handleLinkClick={handleLinkClick}
                  />
                  <MenuItem
                    title="Cadastro de células"
                    route="celulas"
                    icon={<FaHome className="mr-2 text-zinc-400" />}
                    activeLink={activeLink}
                    closeAllSubmenus={closeAllSubmenus}
                    handleLinkClick={handleLinkClick}
                  />
                </div>
              )}

              <div
                className={`text-sm dark:text-white text-zinc-800 hover:bg-gray-200 dark:hover:bg-zinc-800 font-medium rounded-md mb-1 py-3 pl-2 w-full flex items-center cursor-pointer transition-all duration-300 ${isSubmenuOpen(1) ? "text-white bg-sky-700" : ""
                  }`}
                onClick={() => {
                  toggleSubmenu("departments");
                  handleLinkClick("departamentos");
                }}
              >
                <FaUser className="mr-2" />
                Departamentos
                <FaChevronDown className="py-1 pl-1 mr-2" />
              </div>

              {isSubmenuOpen(1) && (
                <div className="pl-0 transition-all duration-600">
                  <MenuItem
                    title="Meus Departamentos"
                    route="departamentos/meus"
                    icon={<FaHome className="mr-2 text-zinc-400" />}
                    activeLink={activeLink}
                    closeAllSubmenus={closeAllSubmenus}
                    handleLinkClick={handleLinkClick}
                  />
                  <MenuItem
                    title="Cadastro de departamentos"
                    route="/departamentos"
                    icon={<FaHome className="mr-2 text-zinc-400" />}
                    activeLink={activeLink}
                    closeAllSubmenus={closeAllSubmenus}
                    handleLinkClick={handleLinkClick}
                  />
                </div>
              )}

              <MenuItem
                title="Suporte"
                route="https://wa.me/555182488374?text=Ol%C3%A1,%20gostaria%20de%20conhecer%20o%20AceleraIA."
                icon={<FaWhatsapp className="mr-2" />}
                activeLink={activeLink}
                closeAllSubmenus={closeAllSubmenus}
                handleLinkClick={handleLinkClick}
              />
            </Fragment>
          )}
        </div>
      </div>
    </div>
  );
}
