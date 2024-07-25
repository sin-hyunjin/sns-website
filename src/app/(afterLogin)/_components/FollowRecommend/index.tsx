"use client";

import { useSession } from "next-auth/react";
import style from "./style.module.css";
import { useRouter } from "next/navigation";

export default function FollowRecommend() {
  const router = useRouter();
  const { data: me } = useSession(); // client에서만 쓸 수 있으며 정보를 가져올수 있음

  const onFollow = () => {
    if (!me?.user) {
      router.replace("/");
    }
  };
  const user = {
    id: "elonmusk",
    nickname: "Elon Musk",
    image: "/yRsRRjGO.jpg",
  };

  return (
    <div className={style.container}>
      <div className={style.userLogoSection}>
        <div className={style.userLogo}>
          <img src={me?.user?.image} alt={me?.user?.email} />
        </div>
      </div>
      <div className={style.userInfo}>
        <div className={style.title}>{user.nickname}</div>
        <div className={style.count}>@{user.id}</div>
      </div>
      <div className={style.followButtonSection}>
        <button onClick={onFollow}>팔로우</button>
      </div>
    </div>
  );
}
