import { ReactNode } from "react";
import style from "@/app/(afterLogin)/layout.module.css";
import Link from "next/link";
import Image from "next/image";
import ZLogo from "@public/zlogo.png";
import NavMenu from "./_components/NavMenu";
import LogoutButton from "./_components/LogoutButton";
import FollowRecommend from "./_components/FollowRecommend";
import TrendSection from "./_components/TrendSection";
import RightSearchZone from "./_components/RightSearchZone";
import { auth } from "@/auth";

type Props = {
  children: ReactNode;
  modal: ReactNode;
};

export default async function AfterLoginLayout({ children, modal }: Props) {
  const session = await auth();
  return (
    <div className={style.container}>
      {/* 왼쪽 섹센의 헤더 */}
      <header className={style.leftSectionWrapper}>
        <section className={style.leftSection}>
          {/* 왼쪽 섹션 고정 영역 */}
          <div className={style.leftSectionFixed}>
            {/* 로고 링크 */}
            <Link className={style.logo} href={session?.user ? "/home" : "/"}>
              <div className={style.logoPill}>
                <Image src={ZLogo} alt="z.com로고" width={40} height={40} />
              </div>
            </Link>
            {/* 내비게이션 */}
            {session?.user && (
              <>
                {" "}
                <nav>
                  <ul>
                    <NavMenu />
                  </ul>
                  <Link href="/compose/tweet" className={style.postButton}>
                    <span>게시하기</span>
                    <svg
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                      className="r-jwli3a r-4qtqp9 r-yyyyoo r-1472mwg r-dnmrzs r-bnwqim r-1plcrui r-lrvibr r-lrsllp"
                    >
                      <g>
                        <path d="M23 3c-6.62-.1-10.38 2.421-13.05 6.03C7.29 12.61 6 17.331 6 22h2c0-1.007.07-2.012.19-3H12c4.1 0 7.48-3.082 7.94-7.054C22.79 10.147 23.17 6.359 23 3zm-7 8h-1.5v2H16c.63-.016 1.2-.08 1.72-.188C16.95 15.24 14.68 17 12 17H8.55c.57-2.512 1.57-4.851 3-6.78 2.16-2.912 5.29-4.911 9.45-5.187C20.95 8.079 19.9 11 16 11zM4 9V6H1V4h3V1h2v3h3v2H6v3H4z"></path>
                      </g>
                    </svg>
                  </Link>
                </nav>
                <LogoutButton />
              </>
            )}
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
