import { ReactNode } from "react";

type Props = {
  children: ReactNode;
  modal: ReactNode;
};

export default async function AfterLoginLayout({ children, modal }: Props) {
  return (
    <div>
      {children} {modal}로그인 전 레이아웃
    </div>
  );
}

/** 계층 구조
 * RootLayout -> HomeLayout -> HomePage 순으로 형성이 되어있다.
 */
