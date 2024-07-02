###  Next.js 14

```bash  
npx create-next-app@latest
```



### `layout.tsx` vs `template.tsx`

- `layout.tsx`: 레이아웃의 리렌더링을 방지함.
- `template.tsx`: 필요할 때 레이아웃의 리렌더링을 허용함.

### TypeScript 사용

- 변수, 매개변수, 리턴값에 타입을 지정함.

### 폴더 명명 규칙

- `(폴더이름)`: 페이지를 그룹화하고 레이아웃을 제공하며 URL에 나타나지 않음.
- `@폴더이름`: 동일한 화면에 두 개의 페이지를 동시에 표시할 수 있음.
- `_폴더이름`: 정리 용도로 사용되며 라우팅에 영향을 주지 않음.

### 현재 세그먼트 위치 확인 방법

- `useSelectedLayoutSegment()`: 최상위 세그먼트를 가져옴 (예: `{home}`).
- `useSelectedLayoutSegments()`: 자식 세그먼트를 포함한 모든 세그먼트를 가져옴 (예: `{home/username}`).

