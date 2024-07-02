import { ReactNode } from "react";

export default function Home({ children }: { children: ReactNode }) {
  return <main> 컴포즈 페이지 {children}</main>;
}
