"use client";

import { useRouter } from "next/navigation";
import { ReactNode } from "react";
import style from "./style.module.css";
type Props = {
  children: ReactNode;
  post: {
    postId: number;
    User: {
      id: string;
      nickname: string;
      image: string;
    };
    content: string;
    createdAt: Date;
    Images: any[];
  };
};

export default function PostArticle({ children, post }: Props) {
  const router = useRouter();
  const onClick = () => {
    router.push(`/${post.User.id}/status/${post.postId}`);
  };
  return (
    // 이벤트 캡처링 : a태그와 onClick이 충돌이 일어나면 eventCapture 기능을 이용하자.
    <article className={style.post} onClickCapture={onClick}>
      {children}
    </article>
  );
}

/** 부모는 클라이언트 컴포넌트이고 자식은 서버 컴포넌트일 떄
 * 따로 컴포넌트를 만들어주고 {children} 을 이용한 내용을 넣어준다
 */
