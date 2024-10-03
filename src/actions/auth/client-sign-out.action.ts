"use client"

import { useRouter } from "next/navigation";
import { destroyCookie } from "nookies";

export function executeClientSignOut(){
    const router = useRouter();
    destroyCookie(null, 'smartChurches.token');
    destroyCookie(null, 'smartChurches.member');
    router.replace("/app/acesso");
  };