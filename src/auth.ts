import NextAuth from "next-auth"; // NextAuth 라이브러리 import
import CredentialsProvider from "next-auth/providers/credentials"; // CredentialsProvider를 import (사용자 인증을 위해)
import { NextResponse } from "next/server"; // NextResponse를 import (서버 응답 처리)

export const {
  handlers: { GET, POST }, // GET, POST 핸들러를 export
  auth, // auth 함수 export (NextAuth의 인증 처리)
  signIn, // signIn 함수 export (로그인 처리)
} = NextAuth({
  // next가 직접 만든 페이지가 아닌 내가 만든 페이지로 등록
  pages: {
    signIn: "/i/flow/login", // 로그인 페이지 경로 설정
    newUser: "/i/flow/signup", // 회원가입 페이지 경로 설정
  },

  // 카카오나 네이버를 추가로 등록할 수 있음
  providers: [
    CredentialsProvider({
      async authorize(credentials) {
        // 인증 처리 함수
        // 로그인 API에 POST 요청을 보내고, 응답을 authResponse에 저장
        const authResponse = await fetch(
          `${process.env.NEXT_PUBLIC_BASE_URL}/api/login`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json", // 요청의 Content-Type을 JSON으로 설정
            },
            body: JSON.stringify({
              id: credentials.username, // 요청 본문에 사용자 ID 추가
              password: credentials.password, // 요청 본문에 사용자 비밀번호 추가
            }),
          }
        );

        if (!authResponse.ok) {
          // 응답이 성공적이지 않으면 null을 반환
          return null;
        }

        const user = await authResponse.json(); // 응답 본문을 JSON으로 파싱하여 user에 저장
        console.log("user", user); // user 정보 콘솔에 출력
        return {
          email: user.id, // 사용자의 email 정보
          name: user.nickname, // 사용자의 이름 정보
          image: user.image, // 사용자의 프로필 이미지 정보
          ...user, // user 객체의 다른 정보들도 반환
        };
      },
    }),
  ],
});
