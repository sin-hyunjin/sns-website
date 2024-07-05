"use client";

import style from "./modal.module.css";
import { useRef, useState } from "react";
import { useRouter } from "next/navigation";

export default function TweetModal() {
  const [content, setContent] = useState(); // 트윗 내용 상태 관리
  const imageRef = useRef<HTMLInputElement>(null); // 이미지 업로드 input 요소에 대한 ref
  const onSubmit = () => {}; // 폼 제출 핸들러
  const router = useRouter();
  const onClickClose = () => {
    router.back();
  }; // 모달 닫기 버튼 클릭 핸들러
  const onClickButton = () => {}; // 이미지 업로드 버튼 클릭 핸들러
  const onChangeContent = () => {}; // 트윗 내용 변경 핸들러

  const me = {
    id: "zerohch0", // 내 ID
    image: "/5Udwvqim.jpg", // 내 프로필 이미지 경로
  };

  return (
    <div className={style.modalBackground}>
      <div className={style.modal}>
        {/* 모달 닫기 버튼 */}
        <button className={style.closeButton} onClick={onClickClose}>
          <svg width={24} viewBox="0 0 24 24" aria-hidden="true">
            <g>
              <path d="M10.59 12L4.54 5.96l1.42-1.42L12 10.59l6.04-6.05 1.42 1.42L13.41 12l6.05 6.04-1.42 1.42L12 13.41l-6.04 6.05-1.42-1.42L10.59 12z"></path>
            </g>
          </svg>
        </button>

        {/* 트윗 작성 폼 */}
        <form className={style.modalForm} onSubmit={onSubmit}>
          <div className={style.modalBody}>
            {/* 사용자 정보 섹션 */}
            <div className={style.postUserSection}>
              <div className={style.postUserImage}>
                <img src={me.image} alt={me.id} /> {/* 사용자 프로필 이미지 */}
              </div>
            </div>

            {/* 트윗 내용 입력란 */}
            <div className={style.inputDiv}>
              <textarea
                className={style.input}
                placeholder="무슨 일이 일어나고 있나요?"
                value={content}
                onChange={onChangeContent}
              />
            </div>
          </div>

          {/* 트윗 작성 모달 하단 */}
          <div className={style.modalFooter}>
            <div className={style.modalDivider} />

            {/* 하단 버튼 그룹 */}
            <div className={style.footerButtons}>
              <div className={style.footerButtonLeft}>
                {/* 이미지 업로드 버튼 */}
                <input
                  type="file"
                  name="imageFiles"
                  multiple
                  hidden
                  ref={imageRef}
                />
                <button
                  className={style.uploadButton}
                  type="button"
                  onClick={onClickButton}
                >
                  <svg width={24} viewBox="0 0 24 24" aria-hidden="true">
                    <g>
                      <path d="M3 5.5C3 4.119 4.119 3 5.5 3h13C19.881 3 21 4.119 21 5.5v13c0 1.381-1.119 2.5-2.5 2.5h-13C4.119 21 3 19.881 3 18.5v-13zM5.5 5c-.276 0-.5.224-.5.5v9.086l3-3 3 3 5-5 3 3V5.5c0-.276-.224-.5-.5-.5h-13zM19 15.414l-3-3-5 5-3-3-3 3V18.5c0 .276.224.5.5.5h13c.276 0 .5-.224.5-.5v-3.086zM9.75 7C8.784 7 8 7.784 8 8.75s.784 1.75 1.75 1.75 1.75-.784 1.75-1.75S10.716 7 9.75 7z"></path>
                    </g>
                  </svg>
                </button>
              </div>
              {/* 게시하기 버튼 */}
              <button className={style.actionButton} disabled={!content}>
                게시하기
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
