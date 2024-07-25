import { auth } from "./auth";
import { NextResponse } from "next/server";

export async function middleware() {
  const session = await auth();
  if (!session) {
    return NextResponse.redirect("http://localhost:3000/i/flow/login");
  }
}

// See "Matching Paths" below to learn more
// middleware를 적용할 route : 로그인을 해야만 접근가능
export const config = {
  matcher: ["/compose/tweet", "/home", "/explore", "/messages", "/search"],
};
