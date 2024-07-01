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
