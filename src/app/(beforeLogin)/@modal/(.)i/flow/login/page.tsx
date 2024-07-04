import LoginModal from "@/app/(beforeLogin)/_components/LoginModal"; // 서버 컴포넌트만 클라이언트 컴포넌트를 임폴트 할 수 있다.

export default function Page() {
  return (
    <main>
      <LoginModal />
    </main>
  );
}
