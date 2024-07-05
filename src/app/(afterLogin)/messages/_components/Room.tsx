"use client";

import style from "@/app/(afterLogin)/messages/message.module.css"; // CSS 모듈을 불러옴
import { faker } from "@faker-js/faker"; // faker 라이브러리를 사용하여 가짜 데이터를 생성
import dayjs from "dayjs"; // 날짜 처리를 위한 dayjs 라이브러리
import { useRouter } from "next/navigation"; // Next.js의 useRouter 훅을 사용하여 라우팅을 관리
import relativeTime from "dayjs/plugin/relativeTime"; // 상대 시간 표시를 위한 dayjs 플러그인
import "dayjs/locale/ko"; // 한글 로케일 불러옴

// dayjs에 한글 로케일과 상대 시간 플러그인을 적용
dayjs.locale("ko");
dayjs.extend(relativeTime);

export default function Room() {
  const router = useRouter(); // useRouter 훅을 사용하여 router 객체를 얻음
  const user = {
    id: "hero",
    nickname: "영웅",
    Messages: [
      { roomId: 123, content: "안녕하세요.", createdAt: new Date() },
      { roomId: 123, content: "안녕히가세요.", createdAt: new Date() },
    ],
  };

  // 채팅방 클릭 시 마지막 메시지의 roomId를 사용하여 해당 채팅방으로 이동하는 함수
  const onClick = () => {
    router.push(`/messages/${user.Messages.at(-1)?.roomId}`);
  };

  return (
    // 채팅방 컴포넌트. 클릭 시 onClick 함수가 실행됨
    <div className={style.room} onClickCapture={onClick}>
      {/* 유저 이미지 표시 */}
      <div className={style.roomUserImage}>
        <img src={faker.image.avatar()} alt="" />
      </div>
      <div className={style.roomChatInfo}>
        {/* 유저 정보와 마지막 메시지 시간을 표시 */}
        <div className={style.roomUserInfo}>
          <b>{user.nickname}</b>
          &nbsp;
          <span>@{user.id}</span>
          &nbsp; · &nbsp;
          <span className={style.postDate}>
            {dayjs(user.Messages?.at(-1)?.createdAt).fromNow(true)}
          </span>
        </div>
        {/* 마지막 메시지 내용을 표시 */}
        <div className={style.roomLastChat}>
          {user.Messages?.at(-1)?.content}
        </div>
      </div>
    </div>
  );
}
