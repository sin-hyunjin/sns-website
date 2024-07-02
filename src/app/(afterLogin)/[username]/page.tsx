import { ReactNode } from "react";

export default function Home({ children }: { children: ReactNode }) {
  return <main> 프로필페이지 {children}</main>;
}
