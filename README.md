
## 프로젝트 개요

Certicos Books는 사용자가 도서를 검색하고, 관심 있는 도서를 찜할 수 있는 웹 애플리케이션입니다. React와 Tailwind CSS를 사용하여 사용자 친화적인 UI를 제공하며, React Hook Form과 Yup을 통해 폼 유효성 검사를 구현합니다. 또한, React Query를 사용하여 서버와의 데이터 동기화를 효율적으로 관리합니다.


## Node Version

```bash
node >= v18
nvm install 20.11.0
nvm use 20.11.0
```

## 설치

1. Yarn 설치

   [https://yarnpkg.com/](https://yarnpkg.com/)

2. OS X & Linux & Windows Shell Emulator:

```sh
# 모듈 설치
$ yarn install
```

## 개발 셋팅

1. 개발용 환경은 `.env.development.local` 참고

```sh
# 개발 모드 실행
yarn dev

# 빌드
yarn build
```

## 폴더 구조 및 주요 코드 설명

```plaintext
src
├─ assets
│  ├─ icons
│  ├─ logo.png
│  └─ index.ts
├─ components
│  ├─ common
│  │  ├─ BookCard.tsx
│  │  ├─ Tab.tsx
│  │  └─ Empty.tsx
│  ├─ layout
│  │  ├─ [레이아웃명]Layout.tsx
│  │  └─ CerticosLayout.tsx
│  ├─ pages
│  │  ├─ [페이지명]
│  │  │  ├─ [페이지명]Component.tsx
│  │  │  └─ [페이지명][컴포넌트명].tsx
│  │  ├─ bookSearch
│  │  │  ├─ BookSearchComponent.tsx
│  │  │  ├─ BookSearchCondition.tsx
│  │  │  └─ BookSearchDetailConditionPopup.tsx
│  │  └─ favoriteBook
│  │     └─ FavoriteBookComponent.tsx
├─ hooks
│  ├─ client
│  │  ├─ [name]Query.ts
│  │  ├─ [name]Client.ts
│  │  └─ useBookListQuery.ts
│  ├─ providers
│  │  └─ [name]Provider.ts
│  │  use[name].ts
│  └─ useOutsideClick.ts
├─ models
│  ├─ interface
│  │  ├─ dto
│  │  │  ├─ I[dto명]Dto.ts
│  │  │  └─ IBookListDto.ts
│  │  ├─ req
│  │  │  ├─ I[리퀘스트명]Req.ts
│  │  │  └─ IBookListReq.ts
│  │  ├─ res
│  │  │  ├─ I[리스폰스명]Res.ts
│  │  └─ vo
│  │  │  ├─ I[vo명]Dto.ts
│  │  │  └─ IBookListConditionVO.ts
│  ├─ type
│  │  ├─ [타입명]Type.ts
│  │  └─ BookSearchTargetType.ts
├─ modules
├─ pages
│  └─ [페이지명]Page.tsx
├─ routers
│  └─ Routers.tsx
├─ store
├─ styles
│  ├─ button.css
│  ├─ tab.css
│  └─ tabItem.css
├─ main.tsx
├─ custom-components.css
├─ index.css
└─ vite-env.d.ts
```

- **components**: UI 컴포넌트가 위치하며, 페이지별로 구성되어 있습니다. 특히, `BookCard`, `Tab`, `Empty` 등과 같은 컴포넌트는 재사용성을 높이기 위해 컴포넌트화되어 있습니다.
- **hooks**: 데이터 페칭 및 상태 관리를 위한 커스텀 훅이 포함되어 있습니다. `useBookListQuery`와 같은 훅은 서버와의 데이터 동기화를 효율적으로 처리합니다.
- **models**: 데이터 모델과 인터페이스가 정의되어 있습니다. `IBookListDocumentDto`와 같은 인터페이스는 데이터 구조를 명확히 정의합니다.
- **view model**: `BookSearchViewModel`은 공통적으로 사용되는 상태와 로직을 관리하여, 컴포넌트 간의 코드 중복을 줄입니다.

## 라이브러리 선택 이유

- **React**: 컴포넌트 기반의 UI 개발을 위한 라이브러리로, 재사용성과 유지보수성을 높입니다. React의 가상 DOM은 성능을 최적화하며, 상태 관리와 UI 업데이트를 효율적으로 처리할 수 있습니다.
- **Tailwind CSS**: 유틸리티 퍼스트 CSS 프레임워크로, 빠르고 일관된 스타일링을 제공합니다. Tailwind CSS는 클래스 기반의 스타일링을 통해 CSS의 중복을 줄이고, 반응형 디자인을 쉽게 구현할 수 있도록 돕습니다.
- **React Hook Form**: 폼 상태 관리와 유효성 검사를 간편하게 처리할 수 있습니다. React Hook Form은 최소한의 리렌더링으로 성능을 최적화하며, Yup과의 통합을 통해 강력한 유효성 검사를 지원합니다.
- **React Query**: 서버 상태 관리와 데이터 페칭을 효율적으로 처리합니다. React Query는 캐싱, 백그라운드 데이터 동기화, 오류 처리 등을 자동으로 관리하여, 클라이언트와 서버 간의 데이터 일관성을 유지합니다.
- **Axios**: HTTP 클라이언트로, API 요청을 간편하게 처리할 수 있습니다. Axios는 Promise 기반의 API를 제공하며, 요청과 응답에 대한 인터셉터를 지원하여, 공통적인 요청 설정을 쉽게 관리할 수 있습니다.
- **React Router**: SPA(Single Page Application)에서 라우팅을 관리하기 위한 라이브러리입니다. React Router는 동적 라우팅, 중첩된 라우트, URL 파라미터 등을 지원하여, 복잡한 네비게이션 구조를 쉽게 구현할 수 있습니다.
- **Vite Plugin SVGR**: SVG 파일을 React 컴포넌트로 변환할 수 있는 Vite 플러그인입니다. 이 플러그인을 사용하면 SVG 파일을 쉽게 가져와서 React 컴포넌트로 사용할 수 있습니다.


## 강조하고 싶은 기능

- **컴포넌트화된 UI**: `BookCard`, `Tab` 등과 같은 컴포넌트는 재사용성을 높이고, 유지보수성을 향상시킵니다.
- **공통 ViewModel 및 Hook**: `BookSearchViewModel`과 같은 공통 ViewModel을 통해 상태와 로직을 중앙에서 관리하여 코드의 일관성을 유지합니다.
- **실시간 데이터 동기화**: React Query를 사용하여 서버와의 데이터 동기화를 실시간으로 처리합니다.
- **사용자 친화적인 UI**: Tailwind CSS를 활용하여 반응형 디자인을 구현하였습니다.
- **효율적인 폼 관리**: React Hook Form과 Yup을 사용하여 폼 유효성 검사를 간편하게 처리합니다.
