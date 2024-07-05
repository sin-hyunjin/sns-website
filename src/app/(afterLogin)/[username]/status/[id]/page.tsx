import BackButton from "@/app/(afterLogin)/_components/BackButton";
import style from "./singlePost.module.css";
import Post from "@/app/(afterLogin)/_components/Post";
import CommentForm from "@/app/(afterLogin)/[username]/status/[id]/_components/CommentForm";

export default function SinglePost() {
  return (
    <div className={style.main}>
      <div className={style.header}>
        <BackButton />
        <h3 className={style.headerTitle}>게시하기</h3>
      </div>

      <div className={style.postContainer}>
        <Post />
      </div>
      <CommentForm />

      <div>
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
      </div>
    </div>
  );
}
