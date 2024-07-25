"use client"

import { InfiniteData, useInfiniteQuery } from "@tanstack/react-query";
import { getPostRecommends } from "@/app/(afterLogin)/home/_lib/getPostRecommends";
import Post from "@/app/(afterLogin)/_component/Post";
import { Post as IPost } from '@/model/Post';
import { Fragment, useEffect } from "react";
import { useInView } from "react-intersection-observer";

export default function PostRecommends() {
  const {
    data,
    fetchNextPage,
    hasNextPage,
    isFetching,
  } = useInfiniteQuery<IPost[], Object, InfiniteData<IPost[]>, [_1: string, _2: string], number>({
    queryKey: ['posts', 'recommends'],
    queryFn: getPostRecommends,
    initialPageParam: 0,
    getNextPageParam: (lastPage) => lastPage[lastPage.length - 1]?.postId,
    staleTime: 60 * 1000, // fresh -> stale, 1분이라는 기준
    gcTime: 300 * 1000, // 가비지 컬렉션 시간
  });

  const { ref, inView } = useInView({
    threshold: 0,
    delay: 0,
  });

  useEffect(() => {
    if (inView) {
      !isFetching && hasNextPage && fetchNextPage();
    }
  }, [inView, isFetching, hasNextPage, fetchNextPage]);

  return (
    <>
      {data?.pages.map((page, i) => (
        <Fragment key={i}>
          {Array.isArray(page) ? (
            page.map((post) => <Post key={post.postId} post={post} />)
          ) : (
            <div key={i}>No posts available.</div> // 배열이 아닌 경우에 대한 처리
          )}
        </Fragment>
      ))}
      <div ref={ref} style={{ height: 50 }} />
    </>
  );
}
