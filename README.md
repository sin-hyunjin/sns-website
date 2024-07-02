### Setting

`npx create-next-app@latest`

├── src
│ └── app
│ ├── (afterLogin) -> 주소체계에 들어가지 않음
│ │ ├── [username]  
│ │ │ ├── page.tsx
│ │ │ └── status
│ │ │ └── [id]
│ │ │ └── page.tsx
│ │ ├── compose
│ │ │ └── tweet
│ │ │ └── page.tsx
│ │ ├── explore
│ │ │ └── page.tsx
│ │ ├── home
│ │ │ ├── layout.tsx
│ │ │ └── page.tsx
│ │ ├── i
│ │ ├── layout.tsx
│ │ └── search
│ │ └── page.tsx

│ ├── (beforeLogin)
│ │ ├── flow
│ │ │ ├── login
│ │ │ │ └── page.tsx
│ │ │ └── signup
│ │ │ └── page.tsx
│ │ └── layout.tsx

#### layout.tsx vs template.tsx

layout.tsx : 리렌더링이 안되게한다
template.tsx : 리렌더링이 되게하고싶으면 사용

typescript 지정 : 변수 , 매개변수 , 리턴값에 지정해줌

### 주소창에 안뜨는 폴더이름

(폴더이름) : 그룹을 지어 줄수 있고 layout.tsx를 줄수 있다.
@폴더이름 : 한화면에 두개의 페이지를 두개 보여주고 싶을때
\_폴더이름 : 폴더 정리용





### 현재 segment 위치를 알수 있는 방법

useSelectedLayoutSegment()  {home} : 최상위 주소만 가져옴

useSelectedLayoutSegment() {home/username} : 자식 주소를 모두 가져옴
