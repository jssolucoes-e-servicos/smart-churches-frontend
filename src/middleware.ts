import api from "@/services/api"; // Instância do axios
import { NextRequest, NextResponse } from "next/server";


// Função para remover a porta do hostname (caso exista)
const extractHostname = (hostname: any) => {
  // Remove a porta, se presente (localhost:3000 -> localhost)
  return hostname.split(':')[0];
};

export async function middleware(req: NextRequest) {
  const fullHostname = req.headers.get("host");
  const host = extractHostname(fullHostname); // Extrai o hostname sem a porta
 
  // Identifica se o host é localhost ou o domínio principal
  const isLocal = host?.includes("localhost");
  const isMainDomain = host === "smartchurches.com.br";

  // Cookies para usuários comuns (igrejas)
  const userToken = req.cookies.get("smartChurches.token")?.value;
  const userCookie = req.cookies.get("smartChurches.member")?.value;

  // Cookies para administradores
  const adminToken = req.cookies.get("smartChurchesAdmin.token")?.value;
  const adminCookie = req.cookies.get("smartChurchesAdmin.member")?.value;

  // ---- Regras para /admin ----
  if (req.nextUrl.pathname.startsWith("/admin")) {
    //Verifica se esta em dev (localhost) ou no dominio principal
    if (!isLocal && !isMainDomain) {
      return NextResponse.redirect(new URL("/app", req.url));
    }
    if (!adminToken || !adminCookie) {
      if (!req.nextUrl.pathname.startsWith("/admin/acesso")) {
        return NextResponse.redirect(new URL("/admin/acesso", req.url));
      }
    } else {
      if (req.nextUrl.pathname.startsWith("/admin/acesso")) {
        return NextResponse.redirect(new URL("/admin", req.url));
      }
    }
    api.defaults.headers.Authorization = `Bearer ${adminToken}`;
  }

  // ---- Regras para /app ----
  if (req.nextUrl.pathname.startsWith("/app")) {
    if (!userToken || !userCookie) {
      if (!req.nextUrl.pathname.startsWith("/app/acesso")) {
        return NextResponse.redirect(new URL("/app/acesso", req.url));
      }
    } else {
      if (req.nextUrl.pathname.startsWith("/app/acesso")) {
        return NextResponse.redirect(new URL("/app", req.url));
      }
    }
    api.defaults.headers.Authorization = `Bearer ${userToken}`;
  }

  // ---- Regras para domínios de subdomínios de igreja ----
  if (!isLocal && !isMainDomain) {
    // Redireciona tudo que não for /app para o /app
    if (!req.nextUrl.pathname.startsWith("/app")) {
      return NextResponse.redirect(new URL("/app", req.url));
    }
  }

  // ---- Rotas públicas (domínio principal e localhost) ----
  if (isLocal || isMainDomain) {
    if (req.nextUrl.pathname === "/") {
      return NextResponse.next();
    }
    // Permite o acesso às rotas públicas fora de /app e /admin
    return NextResponse.next();
  }

  // Continua o fluxo normal
  return NextResponse.next();
}

export const config = {
  matcher: ["/app/acesso", "/app/:path*", "/admin/acesso", "/admin/:path*", "/"], // Inclui as rotas públicas
};