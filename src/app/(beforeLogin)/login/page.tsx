"use client";
import { useRouter } from "next/navigation";
import Main from "@/app/(beforeLogin)/_components/Main";
import { useSession } from "next-auth/react";
// 인터셉팅 라우터는 클라이언트에서만 이루어진다.

export default function Login() {
  const router = useRouter();
  const { data: session } = useSession();

  if (session?.user) {
    router.replace("/home");
    return null;
  }
  router.replace("/i/flow/login");
  return <Main />;
}
