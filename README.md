# wanted-pre-onboarding-challenge-fe-1

원티드 프리온보딩 챌린지 프론트엔드

- 작업기간 : 2022-08-01 ~ 2022-08-19

- 과제 개요 : react-query와 clean code, typescript에 대해 배우고 프로젝트를 개선해보기

---

## 링크

### - 과제 1주차

- [리팩토링 과정 회고록 1](https://velog.io/@matt2550/%EC%9B%90%ED%8B%B0%EB%93%9C-%ED%94%84%EB%A6%AC%EC%98%A8%EB%B3%B4%EB%94%A9-%EC%B1%8C%EB%A6%B0%EC%A7%80)
- [리팩토링 과정 회고록 2 + 리액트쿼리 공부하기](https://velog.io/@matt2550/%EC%9B%90%ED%8B%B0%EB%93%9C-%ED%94%84%EB%A6%AC%EC%98%A8%EB%B3%B4%EB%94%A9-%EC%B1%8C%EB%A6%B0%EC%A7%80-1%EC%A3%BC%EC%B0%A8-%EA%B3%BC%EC%A0%9C-22)
- [리덕스 구현체 만들기](https://velog.io/@matt2550/%EC%9B%90%ED%8B%B0%EB%93%9C-%ED%94%84%EB%A6%AC%EC%98%A8%EB%B3%B4%EB%94%A9-%EC%B1%8C%EB%A6%B0%EC%A7%80-1%EC%A3%BC%EC%B0%A8-%EC%84%A0%ED%83%9D%EA%B3%BC%EC%A0%9C)

### - 과제 2주차

- [리팩토링 과정 회고록](https://velog.io/@matt2550/%EC%9B%90%ED%8B%B0%EB%93%9C-%ED%94%84%EB%A6%AC%EC%98%A8%EB%B3%B4%EB%94%A9-%EC%B1%8C%EB%A6%B0%EC%A7%80-2%EC%A3%BC%EC%B0%A8-%EA%B3%BC%EC%A0%9C-13)
- [리드미 작성 가이드](https://velog.io/@matt2550/%EC%9B%90%ED%8B%B0%EB%93%9C-%ED%94%84%EB%A6%AC%EC%98%A8%EB%B3%B4%EB%94%A9-%EC%B1%8C%EB%A6%B0%EC%A7%80-2%EC%A3%BC%EC%B0%A8-%EA%B3%BC%EC%A0%9C-23)
- 면접 준비(예정)

---

# Assignment 1 - Login / SignUp

- /auth 경로에 로그인 / 회원가입 기능을 개발합니다

  - [✅] 로그인, 회원가입을 별도의 경로로 분리해도 무방합니다

  - [✅] 최소한 이메일, 비밀번호 input, 제출 button을 갖도록 구성해주세요

- 이메일과 비밀번호의 유효성을 확인합니다

  - [✅] 이메일 조건 : 최소 `@`, `.` 포함
  - [✅] 비밀번호 조건 : 8자 이상 입력
  - [✅] 이메일과 비밀번호가 모두 입력되어 있고, 조건을 만족해야 제출 버튼이 활성화 되도록 해주세요

- 로그인 API를 호출하고, 올바른 응답을 받았을 때 루트 경로로 이동시켜주세요

  - [✅] 응답으로 받은 토큰은 로컬 스토리지에 저장해주세요
  - [✅] 다음 번에 로그인 시 토큰이 존재한다면 루트 경로로 리다이렉트 시켜주세요
  - [✅] 어떤 경우든 토큰이 유효하지 않다면 사용자에게 알리고 로그인 페이지로 리다이렉트 시켜주세요

# Assignment 2 - Todo List

- Todo List API를 호출하여 Todo List CRUD 기능을 구현해주세요

  - [✅] 목록 / 상세 영역으로 나누어 구현해주세요.
  - [✅] Todo 목록을 볼 수 있습니다.
  - [✅] Todo 추가 버튼을 클릭하면 할 일이 추가 됩니다.
  - [✅] Todo 수정 버튼을 클릭하면 수정 모드를 활성화하고, 수정 내용을 제출하거나 취소할 수 있습니다.
  - [✅] Todo 삭제 버튼을 클릭하면 해당 Todo를 삭제할 수 있습니다.

- 한 화면 내에서 Todo List와 개별 Todo의 상세를 확인할 수 있도록 해주세요.

  - [✅] 새로고침을 했을 때 현재 상태가 유지되어야 합니다.
  - [✅] 개별 Todo를 조회 순서에 따라 페이지 뒤로가기를 통하여 조회할 수 있도록 해주세요.

- 한 페이지 내에서 새로고침 없이 데이터가 정합성을 갖추도록 구현해주세요
  - [✅] 수정되는 Todo의 내용이 목록에서도 실시간으로 반영되어야 합니다

# 파일 실행법!

작업편의를 위해 node.js와 react.js를 한 폴더에 담아 실행 가능하게 만들었습니다.

```
1. git clone https://github.com/matty255/wanted-pre-onboarding-challenge-fe-1.git
2. cd [folder name]
3. cd client
4. yarn install
5. yarn start (리액트가 켜지길 기다립니다.)
6. ctrl + c (터미널에서!)
7. yarn build
8. 빌드되는걸 기다립니다.
9. cd ..
10. cd server
11. yarn install
12. yarn start (노드가 켜지길 기다립니다.)
13. ctrl + c (터미널에서!)
14. cd ..
15. 경로가 최상위 디렉토리인지 확인(client와 server가 보이는 그 위치!)
16. 최상위 디렉토리에서 yarn install
17. 같은 디렉토리에서 yarn start!

를 하면 이제 실행이 가능하지만 만약 api서버가 이미 켜져있고 다른 곳에 있다면
client 부분만 clone해서
1. cd client
2. yarn install
3. yarn start

도 가능합니다!
```

```
아이디 : aaa@aaa.com
비밀번호 : aaaaaaaa
```

# 기술 스택

### 1. typescript

- 과제 요구 조건인 typescript를 사용하여 제작하였습니다.

### 2. react-query

- 과제 요구 조건인 react-query를 사용하여 제작하였습니다.
- 최초에는 recoil을 같이 사용하면 좋다는 추천에 따라 같이 사용하였는데, 워낙 제공하는 기능이 좋음 + 백엔드와 로컬스토리지가 있음 + 간단한 todo 프로젝트라 사용할만한 곳이 없어 최종 버전에서는 삭제후 관련 디펜던시를 제거하였습니다.

### 3. tailwindCSS

- 빠른 작업과 자유도를 위해 tailwindCSS를 선택했습니다.

### 4. twin.macro

- tailwindCSS는 인라인 클래스에 작성해야 해서 컴포넌트가 많아질 경우 한 눈에 보기 어려운데, 이를 해결하고 컴포넌트의 확장성, 재사용성을 높이기 위해 twin.macro를 도입했습니다.

- tailwindCSS 3.1.8 버전은 현재 twin.macro의 공식버전과 호환테스트 중이라서 rc버전(Release Candidates)으로 사용하고 있습니다.

### 5. emotion

- twin.macro에 styled문법을 같이 사용하기 위해 선택했습니다.

### 6. fullhuman/post-css-purgecss

- node.js 백엔드와 연결되어 있는 프로젝트 특성상 빌드시 번들 크기를 줄이는게 좋겠다고 생각되어 선택했습니다.

### 7. axios

- 유지보수의 난이도를 줄이고 관리하기 편한 프로젝트를 위해 선택하였습니다.
- api/instance.ts 에서 새 인스턴스를 생성할때 인터셉터로 토큰 관련한 코드를 전부 넘기고, 프로젝트 내에서는 직접적으로 토큰을 요청하지 않게 했습니다.

### 8. date-fns

- 백엔드 디비에서는 'created at'과 'updated at' Date 객체도 같이 보내주고 있는데 편리하게 몇분전 수정을 표시해주는 기능을 띄워주고 싶어서 사용하였습니다.

### 9. react-error-boundary

- 에러 바운더리 처리를 구현하기 위해 사용했습니다. 자체구현할까 생각했지만 일단은 실제로 사용해보면서 react-query에서의 전역 에러 핸들러라던지 지역 suspense를 써보고 싶었기 때문입니다.

---

# 폴더 구조

before

```
📦src
 ┣ 📂api
 ┃ ┣ 📜httpRequest.ts
 ┃ ┗ 📜instance.ts
 ┣ 📂common
 ┃ ┣ 📜Button.tsx
 ┃ ┣ 📜Label.tsx
 ┃ ┣ 📜Modal.tsx
 ┃ ┗ 📜Text.tsx
 ┣ 📂components
 ┃ ┣ 📂layout
 ┃ ┃ ┣ 📜Header.tsx
 ┃ ┃ ┗ 📜Layout.tsx
 ┃ ┣ 📂signUp
 ┃ ┃ ┗ 📜Form.tsx
 ┃ ┗ 📂toDo
 ┃ ┃ ┣ 📜Card.tsx
 ┃ ┃ ┣ 📜AddToDo.tsx
 ┃ ┃ ┣ 📜Detail.tsx
 ┃ ┃ ┗ 📜List.tsx
 ┣ 📂hooks
 ┃ ┣ 📜useDebounce.tsx
 ┃ ┣ 📜useForm.tsx
 ┃ ┣ 📜useFormValidations.tsx
 ┃ ┣ 📜useModal.tsx
 ┣ 📂page
 ┃ ┣ 📜Home.tsx
 ┃ ┗ 📜SignUp.tsx
 ┣ 📂routes
 ┃ ┗ 📜Routes.tsx
 ┣ 📂static
 ┃ ┗ 📂image
 ┃ ┃ ┗ 📜background.png
 ┣ 📂types
 ┃ ┣ 📜toDos.d.ts
 ┃ ┣ 📜twin.d.ts
 ┃ ┣ 📜types.d.ts
 ┃ ┗ 📜user.d.ts
 ┣ 📜App.tsx
 ┣ 📜index.css
 ┣ 📜index.tsx
 ┣ 📜react-app-env.d.ts
 ┣ 📜setupProxy.js
 ┣ 📜tailwind.css
 ┗ 📜tailwind.generated.css
```

### - 구조적으로 바뀐 것

- 이름을 더 자세하게 리네이밍
- useForm의 유효성검사 하나하나를 분리하여 재사용성을 높임
- common에서 공통으로 사용하는 컴포넌트의 종류와 수를 늘림
- api에서 query를 분리하여 로직을 한곳에 모음
- api에서 instance 관련 설정들을 추상화해서 유지보수를 쉽게 함
- custom routes를 만들어 리다이렉트 설정을 라우트단에서 관리

```
📦src
 ┣ 📂api
 ┃ ┣ 📜httpRequest.ts
 ┃ ┣ 📜instance.ts
 ┃ ┣ 📜querys.ts
 ┃ ┗ 📜storage.ts
 ┣ 📂common
 ┃ ┣ 📜Box.tsx
 ┃ ┣ 📜Button.tsx
 ┃ ┣ 📜HiddenBox.tsx
 ┃ ┣ 📜index.ts
 ┃ ┣ 📜Input.tsx
 ┃ ┣ 📜Label.tsx
 ┃ ┣ 📜Modal.tsx
 ┃ ┣ 📜ModalContent.tsx
 ┃ ┣ 📜Skeleton.tsx
 ┃ ┣ 📜Spinner.tsx
 ┃ ┗ 📜Text.tsx
 ┣ 📂components
 ┃ ┣ 📂layout
 ┃ ┃ ┣ 📜Header.tsx
 ┃ ┃ ┣ 📜Layout.tsx
 ┃ ┃ ┗ 📜TopButton.tsx
 ┃ ┣ 📂signUp
 ┃ ┃ ┣ 📜Form.tsx
 ┃ ┃ ┣ 📜LoginForm.tsx
 ┃ ┃ ┗ 📜SignInForm.tsx
 ┃ ┗ 📂toDo
 ┃ ┃ ┣ 📜Card.tsx
 ┃ ┃ ┣ 📜CreateToDoForm.tsx
 ┃ ┃ ┣ 📜DetailPage.tsx
 ┃ ┃ ┗ 📜List.tsx
 ┣ 📂hooks
 ┃ ┣ 📂validations
 ┃ ┃ ┣ 📜email.ts
 ┃ ┃ ┣ 📜index.ts
 ┃ ┃ ┣ 📜password.ts
 ┃ ┃ ┗ 📜passwordConfirm.ts
 ┃ ┣ 📜useDark.tsx
 ┃ ┣ 📜useDebounce.tsx
 ┃ ┣ 📜useForm.tsx
 ┃ ┣ 📜useFormValidations.tsx
 ┃ ┣ 📜useMediaQuery.tsx
 ┃ ┣ 📜useModal.tsx
 ┃ ┣ 📜usePreventLeave.tsx
 ┃ ┗ 📜useThrottle.tsx
 ┣ 📂page
 ┃ ┣ 📜Home.tsx
 ┃ ┣ 📜NotFound404.tsx
 ┃ ┗ 📜SignUp.tsx
 ┣ 📂routes
 ┃ ┣ 📜CustomRoutes.tsx
 ┃ ┗ 📜Routes.tsx
 ┣ 📂static
 ┃ ┣ 📂constant
 ┃ ┃ ┣ 📜AuthInit.ts
 ┃ ┃ ┗ 📜ToDoInit.ts
 ┃ ┗ 📂image
 ┃ ┃ ┣ 📜arrow.svg
 ┃ ┃ ┗ 📜background.png
 ┣ 📂types
 ┃ ┣ 📜toDos.d.ts
 ┃ ┣ 📜twin.d.ts
 ┃ ┣ 📜types.d.ts
 ┃ ┗ 📜user.d.ts
 ┣ 📜App.tsx
 ┣ 📜index.css
 ┣ 📜index.tsx
 ┣ 📜react-app-env.d.ts
 ┣ 📜setupProxy.js
 ┣ 📜tailwind.css
 ┗ 📜tailwind.generated.css
```
