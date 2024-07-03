import { ReactNode } from "react";
import style from "@/app/(afterLogin)/layout.module.css";
import Link from "next/link";
import Image from "next/image";
import ZLogo from "public/zlogo.png";
import NavMenu from "./_components/NavMenu";
import LogoutButton from "./_components/LogoutButton";
import FollowRecommend from "./_components/FollwRecommend";
import TrendSection from "./_components/TrendSection";
import RightSearchZone from "./_components/RightSearchZone";

type Props = {
  children: ReactNode;
  modal: ReactNode;
};

export default function AfterLoginLayout({ children, modal }: Props) {
  return (
    <div className={style.container}>
      {/* 왼쪽 섹센의 헤더 */}
      <header className={style.leftSectionWrapper}>
        <section className={style.leftSection}>
          {/* 왼쪽 섹션 고정 영역 */}
          <div className={style.leftSectionFixed}>
            {/* 로고 링크 */}
            <Link className={style.logo} href="/home">
              <div className={style.logoPill}>
                <Image src={ZLogo} alt="z.com로고" width={40} height={40} />
              </div>
            </Link>
            {/* 내비게이션 */}
            <nav>
              <ul>
                <NavMenu />
              </ul>
              <Link href="/compose/tweet" className={style.postButton}>
                게시하기
              </Link>
            </nav>
            <LogoutButton />
          </div>
        </section>
      </header>

      {/* 오른쪽 섹션 래퍼 */}
      <div className={style.rightSectionWrapper}>
        <div className={style.rightSectionInner}>
          {/* 메인 콘텐츠 영역 */}
          <main className={style.main}>{children}</main>

          {/* 오른쪽 추가 섹션 */}
          <section className={style.rightSection}>
            {/* 검색 폼 */}
            <RightSearchZone />
            {/* 트랜드 관련 섹션 */}
            <TrendSection />
            {/* 팔로우 추가 섹션 */}
            <div className={style.followRecommend}>
              <FollowRecommend />
              <FollowRecommend />
              <FollowRecommend />
            </div>
          </section>
        </div>
      </div>
      {modal}
    </div>
  );
}
