import { ReactNode } from "react";
import styles from "@/app/page.module.css";

type Props = {
  children: ReactNode;
  modal: ReactNode;
};

export default async function BeforeLoginLayout({ children, modal }: Props) {
  return (
    <div className={styles.container}>
      로그인 후 레이아웃
      {children}
      {modal}
    </div>
  );
}

/* 계층 구조
 * RootLayout -> HomeLayout -> HomePage 순으로 형성이 되어있다.
 */

/** 모달 사용법 (페럴레 라우트)
 * 1. 같은 폴더 위치에 있어야한다.
 * 2. @폴더이름 구조로 적어야한다.
 *
 */
