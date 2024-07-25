import Main from "@/app/(beforeLogin)/_components/Main";
import { auth } from "@/auth";
import { redirect } from "next/navigation";

export default async function BeforeLoginPage() {
  const session = await auth(); // server 쪽에서는 useSession 대신 auth를 사용
  if (session?.user) {
    redirect("/home");
    return null;
  }
  return <Main />;
}
