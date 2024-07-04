"use client";

import style from "./style.module.css";
import { useSelectedLayoutSegment } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

/*  이미지 파일 import  */
import {
  ExploreFilled,
  ExpooreOutline,
  HomeFilled,
  HomeOutline,
  MessagesFilled,
  MessagesOutline,
} from "@public/afterLogin";

//        Components : NavMenu          //
export default function NavMenu() {
  const segment = useSelectedLayoutSegment(); // 현재 layout 위치 주소를 알수 있음
  console.log(segment);
  const me = {
    // 임시로 내 정보 있는것처럼
    id: "zerohch0",
  };

  return (
    <>
      <li>
        {/* 홈 메뉴 항목 */}
        <Link href="/home">
          <div className={style.navPill}>
            {segment === "home" ? (
              <>
                <Image
                  src={HomeFilled}
                  alt="Home Filled"
                  width={26}
                  height={26}
                />
                <div style={{ fontWeight: "bold" }}>홈</div>
              </>
            ) : (
              <>
                <Image
                  src={HomeOutline}
                  alt="Home Outline"
                  width={26}
                  height={26}
                />
                <div style={{}}>홈</div>
              </>
            )}
          </div>
        </Link>
      </li>

      {/* 탐색하기 메뉴 항목 */}
      <li>
        <Link href="/explore">
          <div className={style.navPill}>
            {segment && ["search", "explore"].includes(segment) ? (
              <>
                <Image
                  src={ExploreFilled}
                  alt="Explore Filled"
                  width={26}
                  height={26}
                />
                <div style={{ fontWeight: "bold" }}>탐색하기</div>
              </>
            ) : (
              <>
                <Image
                  src={ExpooreOutline}
                  alt="Explore Outline"
                  width={26}
                  height={26}
                />
                <div style={{}}>탐색하기</div>
              </>
            )}
          </div>
        </Link>
      </li>

      {/* 쪽지 메뉴 항목 */}
      <li>
        <Link href="/messages">
          <div className={style.navPill}>
            {segment === "messages" ? (
              <>
                <Image
                  src={MessagesFilled}
                  alt="Messages Filled"
                  width={26}
                  height={26}
                />
                <div style={{ fontWeight: "bold" }}>쪽지</div>
              </>
            ) : (
              <>
                <Image
                  src={MessagesOutline}
                  alt="Messages Outline"
                  width={26}
                  height={26}
                />
                <div style={{}}>쪽지</div>
              </>
            )}
          </div>
        </Link>
      </li>
      {/* 프로필 메뉴 항목 */}
      {me?.id && (
        <li>
          <Link href={`/${me?.id}`}>
            <div className={style.navPill}>
              {segment === me.id ? (
                <>
                  <svg
                    width={26}
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                    className="r-18jsvk2 r-4qtqp9 r-yyyyoo r-lwhw9o r-dnmrzs r-bnwqim r-1plcrui r-lrvibr r-cnnz9e"
                  >
                    <g>
                      <path d="M17.863 13.44c1.477 1.58 2.366 3.8 2.632 6.46l.11 1.1H3.395l.11-1.1c.266-2.66 1.155-4.88 2.632-6.46C7.627 11.85 9.648 11 12 11s4.373.85 5.863 2.44zM12 2C9.791 2 8 3.79 8 6s1.791 4 4 4 4-1.79 4-4-1.791-4-4-4z"></path>
                    </g>
                  </svg>
                  <div style={{ fontWeight: "bold" }}>프로필</div>
                </>
              ) : (
                <>
                  <svg
                    width={26}
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                    className="r-18jsvk2 r-4qtqp9 r-yyyyoo r-lwhw9o r-dnmrzs r-bnwqim r-1plcrui r-lrvibr r-cnnz9e"
                  >
                    <g>
                      <path d="M5.651 19h12.698c-.337-1.8-1.023-3.21-1.945-4.19C15.318 13.65 13.838 13 12 13s-3.317.65-4.404 1.81c-.922.98-1.608 2.39-1.945 4.19zm.486-5.56C7.627 11.85 9.648 11 12 11s4.373.85 5.863 2.44c1.477 1.58 2.366 3.8 2.632 6.46l.11 1.1H3.395l.11-1.1c.266-2.66 1.155-4.88 2.632-6.46zM12 4c-1.105 0-2 .9-2 2s.895 2 2 2 2-.9 2-2-.895-2-2-2zM8 6c0-2.21 1.791-4 4-4s4 1.79 4 4-1.791 4-4 4-4-1.79-4-4z"></path>
                    </g>
                  </svg>
                  <div style={{}}>프로필</div>
                </>
              )}
            </div>
          </Link>
        </li>
      )}
    </>
  );
}
