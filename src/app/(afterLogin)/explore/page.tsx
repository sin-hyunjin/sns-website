import { ReactNode } from "react";

export default function Home({ children }: { children: ReactNode }) {
  return <main> explore 페이지 {children}</main>;
}
