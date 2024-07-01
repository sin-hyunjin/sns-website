import { ReactNode } from "react";

export default function Home({ children }: { children: ReactNode }) {
  return <main> 홈 레이아웃 {children}</main>;
}
