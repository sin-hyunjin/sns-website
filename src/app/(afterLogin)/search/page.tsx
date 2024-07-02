import { ReactNode } from "react";

export default function Home({ children }: { children: ReactNode }) {
  return <main> 검색 페이지 {children}</main>;
}
