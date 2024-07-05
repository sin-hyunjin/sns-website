import { faker } from "@faker-js/faker"; // faker 라이브러리를 사용하여 가짜 데이터를 생성
import style from "./chatRoom.module.css"; // CSS 모듈을 불러옴
import Link from "next/link"; // Link 컴포넌트를 사용하여 페이지 간의 이동을 관리
import BackButton from "@/app/(afterLogin)/_components/BackButton"; // 뒤로가기 버튼 컴포넌트를 불러옴
import cx from "classnames"; // 여러 클래스 이름을 조건부로 결합하는 라이브러리
import relativeTime from "dayjs/plugin/relativeTime"; // 상대 시간 표시를 위한 dayjs 플러그인
import "dayjs/locale/ko"; // 한글 로케일 불러옴
import dayjs from "dayjs"; // 날짜 처리를 위한 dayjs 라이브러리

// dayjs에 한글 로케일과 상대 시간 플러그인을 적용
dayjs.locale("ko");
dayjs.extend(relativeTime);

export default function ChatRoom() {
  // 유저 정보와 메시지 데이터 정의
  const user = {
    id: "hero",
    nickname: "영웅",
    image: faker.image.avatar(),
  };
  const messages = [
    {
      messageId: 1,
      roomId: 123,
      id: "zerohch0",
      content: "안녕하세요.",
      createdAt: new Date(),
    },
    {
      messageId: 2,
      roomId: 123,
      id: "hero",
      content: "안녕히가세요.",
      createdAt: new Date(),
    },
  ];

  return (
    <main className={style.main}>
      {/* 채팅방 헤더: 뒤로가기 버튼과 유저 닉네임 표시 */}
      <div className={style.header}>
        <BackButton />
        <div>
          <h2>{user.nickname}</h2>
        </div>
      </div>
      {/* 유저 정보 링크: 유저 이미지와 닉네임, 아이디 표시 */}
      <Link href={user.nickname} className={style.userInfo}>
        <img src={user.image} alt={user.id} />
        <div>
          <b>{user.nickname}</b>
        </div>
        <div>@{user.id}</div>
      </Link>
      {/* 메시지 리스트: 각 메시지를 표시 */}
      <div className={style.list}>
        {messages.map((m) => {
          if (m.id === "zerohch0") {
            // 내 메시지인 경우
            return (
              <div
                key={m.messageId}
                className={cx(style.message, style.myMessage)}
              >
                <div className={style.content}>{m.content}</div>
                <div className={style.date}>
                  {dayjs(m.createdAt).format("YYYY년 MM월 DD일 A HH시 mm분")}
                </div>
              </div>
            );
          }
          // 상대방 메시지인 경우
          return (
            <div
              key={m.messageId}
              className={cx(style.message, style.yourMessage)}
            >
              <div className={style.content}>{m.content}</div>
              <div className={style.date}>
                {dayjs(m.createdAt).format("YYYY년 MM월 DD일 A HH시 mm분")}
              </div>
            </div>
          );
        })}
      </div>
    </main>
  );
}
