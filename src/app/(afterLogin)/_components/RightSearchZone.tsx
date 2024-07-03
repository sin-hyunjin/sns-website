"use client";

import style from "./rightSearchZone.module.css";
import { usePathname } from "next/navigation";
import React from "react";
import SearchForm from "@/app/(afterLogin)/_components/SearchForm";

// 우측 검색 영역 컴포넌트
export default function RightSearchZone() {
  const pathname = usePathname(); // 현재 페이지 경로 가져오기
  const onChangeFollow = () => {}; // 팔로우 상태 변경 이벤트 핸들러
  const onChangeAll = () => {}; // 모두 선택 상태 변경 이벤트 핸들러

  // 만약 현재 경로가 "/explore"인 경우, 컴포넌트를 null로 반환하여 렌더링하지 않음
  if (pathname === "/explore") {
    return null;
  }

  // 만약 현재 경로가 "/search"인 경우, 검색 필터와 관련된 UI를 렌더링
  if (pathname === "/search") {
    return (
      <div>
        <h5 className={style.filterTitle}>검색 필터</h5>
        <div className={style.filterSection}>
          <div>
            <label>사용자</label>
            <div className={style.radio}>
              <div>모든 사용자</div>
              <input
                type="radio"
                name="pf"
                defaultChecked
                onChange={onChangeAll}
              />
            </div>
            <div className={style.radio}>
              <div>내가 팔로우하는 사람들</div>
              <input
                type="radio"
                name="pf"
                value="on"
                onChange={onChangeFollow}
              />
            </div>
          </div>{" "}
          <div>
            <label>위치</label>
            <div className={style.radio}>
              <div>어디에서나</div>
              <input
                type="radio"
                name="wf"
                defaultChecked
                onChange={onChangeAll}
              />
            </div>
            <div className={style.radio}>
              <div>현 위치 주변</div>
              <input
                type="radio"
                name="wf"
                value="on"
                onChange={onChangeFollow}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }

  // 기본적으로는 검색 폼을 포함한 UI를 렌더링
  return (
    <div style={{ marginBottom: 60, width: "inherit" }}>
      <SearchForm />
    </div>
  );
}
