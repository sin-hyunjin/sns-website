import style from "./home.module.css";
import Tab from "@/app/(afterLogin)/home/_components/Tab";
import PostForm from "@/app/(afterLogin)/home/_components/PostForm";
import Post from "@/app/(afterLogin)/_components/Post";
import TabProvider from "@/app/(afterLogin)/home/_components/TabProvider";
export default function Home() {
  return (
    <main className={style.main}>
      <TabProvider>
        <Tab />
        <PostForm />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
      </TabProvider>
    </main>
  );
}
