"use client";

import { useQuery } from "@tanstack/react-query";
import { getFollowingPosts } from "@/app/(afterLogin)/home/_lib/getFollowingPosts";
import Post from "@/app/(afterLogin)/_component/Post";
import { Post as IPost } from "@/model/Post";
import { useSession } from "next-auth/react";

export default function FollowingPosts() {
  const { data: session } = useSession();
  const { data, isLoading, error } = useQuery<IPost[]>({
    queryKey: ["followingPosts"],
    queryFn: getFollowingPosts,
    enabled: !!session?.user,
  });

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading posts</div>;

  return (
    <>
      {Array.isArray(data) ? (
        data.map((post) => <Post key={post.postId} post={post} />)
      ) : (
        <div>No posts available</div>
      )}
    </>
  );
}
