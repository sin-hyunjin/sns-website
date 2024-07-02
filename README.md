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

#### vscode 변수나 함수타입을 추론 

Inlay Hints : Enabled -> onUnlessPressed로 변경



## 라이브러리 (npm trands에서 비교 )

#### dayjs 

Day.js 

사용예제:

```javascript
import dayjs from 'dayjs';

// 현재 날짜와 시간
console.log(dayjs().format());

// 날짜 더하기
console.log(dayjs().add(1, 'day').format());

// 날짜 비교
console.log(dayjs().isBefore(dayjs().add(1, 'day')));

```

- **모던 API**: Moment.js와 비슷한 API를 제공하면서도 더 현대적인 방식으로 설계됨.

#### classname

**사용 예제**:

```javascript
import cx from 'classnames';

const isActive = true;
const buttonClass = cx('button', { 'button-active': isActive });

console.log(buttonClass); // "button button-active"

```

- **조건부 클래스 관리**: 조건에 따라 클래스 이름을 동적으로 적용할 수 있음.

- **가독성 향상**: 코드가 더 간결하고 읽기 쉬워짐.

- **유연성**: 문자열, 객체, 배열 등 다양한 방식으로 클래스를 조합할 수 있음.
