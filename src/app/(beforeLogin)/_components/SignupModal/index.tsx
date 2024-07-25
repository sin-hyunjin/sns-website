"use client";

import style from "./style.module.css"; // CSS 모듈 스타일을 import
import BackButton from "@/app/(beforeLogin)/_components/BackButton"; // 뒤로가기 버튼 컴포넌트를 import
import onSubmit from "@/app/(beforeLogin)/_lib/signup"; // 회원가입 처리를 위한 onSubmit 함수를 import
import { useFormState, useFormStatus } from "react-dom"; // 폼 상태와 폼 상태를 관리하는 hook을 import

// 오류 메시지를 보여주는 함수
function showMessage(messasge: string | null | undefined) {
  if (messasge === "no_id") {
    return "아이디를 입력하세요.";
  }
  if (messasge === "no_name") {
    return "닉네임을 입력하세요.";
  }
  if (messasge === "no_password") {
    return "비밀번호를 입력하세요.";
  }
  if (messasge === "no_image") {
    return "이미지를 업로드하세요.";
  }
  if (messasge === "user_exists") {
    return "이미 사용 중인 아이디입니다.";
  }
  return "";
}

// SignupModal 컴포넌트 정의
export default function SignupModal() {
  // useFormState 훅을 사용하여 폼 상태와 폼 액션을 설정
  const [state, formAction] = useFormState(onSubmit, { message: null });

  // useFormStatus 훅을 사용하여 폼이 제출 중인지 상태를 가져옴
  const { pending } = useFormStatus();

  return (
    <>
      <div className={style.modalBackground}>
        <div className={style.modal}>
          <div className={style.modalHeader}>
            {/* 뒤로가기 버튼 */}
            <BackButton />
            <div>계정을 생성하세요.</div>
          </div>
          {/* 폼 시작 */}
          <form action={formAction}>
            <div className={style.modalBody}>
              {/* 아이디 입력 필드 */}
              <div className={style.inputDiv}>
                <label className={style.inputLabel} htmlFor="id">
                  아이디
                </label>
                <input
                  id="id"
                  name="id"
                  className={style.input}
                  type="text"
                  placeholder=""
                  required
                />
              </div>
              {/* 닉네임 입력 필드 */}
              <div className={style.inputDiv}>
                <label className={style.inputLabel} htmlFor="name">
                  닉네임
                </label>
                <input
                  id="name"
                  name="name"
                  className={style.input}
                  type="text"
                  placeholder=""
                  required
                />
              </div>
              {/* 비밀번호 입력 필드 */}
              <div className={style.inputDiv}>
                <label className={style.inputLabel} htmlFor="password">
                  비밀번호
                </label>
                <input
                  id="password"
                  name="password"
                  className={style.input}
                  type="password"
                  placeholder=""
                  required
                />
              </div>
              {/* 프로필 이미지 업로드 필드 */}
              <div className={style.inputDiv}>
                <label className={style.inputLabel} htmlFor="image">
                  프로필
                </label>
                <input
                  id="image"
                  name="image"
                  className={style.input}
                  type="file"
                  accept="image/*"
                  required
                />
              </div>
            </div>
            <div className={style.modalFooter}>
              {/* 가입하기 버튼 */}
              <button
                type="submit"
                className={style.actionButton}
                disabled={pending} // 폼 제출 중일 때 버튼 비활성화
              >
                가입하기
              </button>
              {/* 오류 메시지 표시 */}
              <div className={style.error}>{showMessage(state?.message)}</div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
