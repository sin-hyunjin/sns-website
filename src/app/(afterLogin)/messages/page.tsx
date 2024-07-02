import { ReactNode } from "react";

export default function Home({ children }: { children: ReactNode }) {
  return <main>메세지페이지 {children}</main>;
}
