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

## 프로젝트 구성

```js
.
src
├─ assets
│  ├─ icons
│  ├─ logo.png
│  └─ index.ts
├─ components
│  ├─ common
│  ├─ ...
│  └─ pages
│      └─ [페이지명]
│          ├─ [페이지명]Component.tsx
│          └─ [페이지명][컴포넌트명].tsx
├─ hooks
│  ├─ client
│  │  ├─ [name]Query.ts
│  │  └─ [name]Mutate.ts
│  ├─ providers
│  │  └─ [name]Provider.ts
│  └─ use[name].ts
├─ models
│  ├─ interface
│  │  ├─ req
│  │     └─ I[리퀘스트명]req.ts
│  │  ├─ res
│  │     └─ I[리스폰스명]res.ts
│  │  └─ dto
│  │     └─ I[dto명]Dto.ts
│  ├─ type
│  │  └─ [타입명]Type.ts
├─ modules
├─ pages
│  ├─ [페이지명]Page.tsx
├─ routers
├─ store
├─ styles
├─ translations
├─ main.tsx
└─ styles.scss
```
