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
5. yarn start
6. ctrl + c
7. yarn build
9. cd ..
10. cd server
11. yarn install
12. yarn start
13. ctrl + c
14. cd ..
15. 경로가 최상위 디렉토리인지 확인
16. 최상위 디렉토리에서 yarn install
17. 같은 디렉토리에서 yarn start!

를 하면 이제 실행이 가능하지만 만약 api서버가 이미 8080포트로 켜져있고 다른 곳에 있다면

1. cd client
2. yarn install
3. yarn start

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

- 빠른 작업과 자유도의 중간지점을 타협하여 tailwindCSS를 선택했습니다. scss나 styled-component는 자유도가 높지만 바닥부터 전역변수와 테마를 설정해야 하기에 작업속도가 느린 것이 단점이고, mui나 antd는 물론 커스텀을 하려면 할순 있지만 기본 정해진 모양과 색을 바꾸기가 힘듭니다. ui 라이브러리이기 때문입니다.

- 하지만 tailwindCSS는 utility-first CSS framework, 즉 프레임워크이면서 utility-first 특성을 가져 적당한 템플릿과 템플릿 만들기 쉬운 구조, 비교적 높은 자유도를 보장합니다.
- 테일윈드의 단점이라면 utility-first의 특징 = 용량을 많이 먹는다는 건데 그건 밑에 나오는 purgecss로 빌드시 사용하지 않는 css를 날려줌으로써 보완하였습니다.

### 4. twin.macro

- tailwindCSS는 인라인 클래스에 작성해야 해서 컴포넌트가 많아질 경우 한 눈에 보기 어려운데, 이를 해결하고 컴포넌트의 확장성, 재사용성을 높이기 위해 twin.macro를 도입했습니다.

- tailwindCSS 3.1.8 버전은 현재 twin.macro의 공식버전과 호환테스트 중이라서 rc버전(Release Candidates)으로 사용하고 있습니다.

### 5. emotion

- twin.macro에 styled문법을 같이 사용하기 위해 선택했습니다. twin.macro는 styled-component와 emotion확장 2개를 지원하고 있습니다. 둘다 익숙하지만 보통 사용할때 styled-component는 단독으로 쓰고 emotion은 이렇게 익스텐션할때 썼어서 emotion으로 하였습니다.

### 6. fullhuman/post-css-purgecss

- 빌드시 번들 크기를 줄이기 위해 사용했습니다.
- before 
- after 

### 7. axios

- 유지보수의 난이도를 줄이고 관리하기 편한 프로젝트를 위해 선택하였습니다.
- api/instance.ts 에서 새 인스턴스를 생성할때 인터셉터로 토큰 관련한 코드를 전부 넘기고, 프로젝트 내에서는 직접적으로 토큰을 요청하지 않게 했습니다.

### 8. date-fns

- 백엔드 디비에서는 'created at'과 'updated at' Date 객체도 같이 보내주고 있는데 편리하게 몇분전 수정을 표시해주는 기능을 띄워주고 싶어서 사용하였습니다.

### 9. react-error-boundary

- 에러 바운더리 처리를 구현하기 위해 사용했습니다. 자체구현할까 생각했지만 일단은 실제로 사용해보면서 react-query에서의 전역 에러 핸들러라던지 지역 suspense를 써보고 싶었기 때문입니다. 에러바운더리는 리액트 16에서 등장했는데 그 때문에 공식 형태는 class형밖에 존재하지 않기 때문입니다. 현재 18버전으로 오면서부터는 공식적으로 모든 컴포넌트에 함수형의 사용을 권장하고 있습니다. 

- 과제 요구사항이 함수형으로 구현할 것<-- 이었기에 다른 문서들을 보고 스스로 함수형으로 구현해볼까도 생각했지만... 지금의 최우선목표는 창조가 아니라 배움이라고 생각이 들었기에 과제 요구사항을 충족하며 개발하기 위해 react-query 공식문서에서 추천하는 react-error-boundary를 사용했습니다.

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

# 코드 설명

## 1. api : 관련이슈는 여기 - [[1 - 첫 리팩토링]](https://github.com/matty255/wanted-pre-onboarding-challenge-fe-1/issues/1) / [[2 - api]](https://github.com/matty255/wanted-pre-onboarding-challenge-fe-1/issues/10)

### token 담는 부분을 interceptor 처리하고 instance를 분리하여 한 곳에서만 관리하게 했습니다.

- 토큰의 형태가 바뀌더라도 뷰단에는 영향이 없고 api/instance.ts에서 관련 로직만 변경하면 작동할 수 있습니다.

  링크 - [api/instance.ts](https://github.com/matty255/wanted-pre-onboarding-challenge-fe-1/blob/main/client/src/api/instance.ts)

### storage 관련 로직을 추상화하여 커스텀한 getToken, setToken, hasToken 메서드를 가진 객체로 만들었습니다.

- 스토리지 저장소가 세션스토리지, 혹은 다른 어떤 형식으로 바뀌더라도 뷰단에는 영향이 없고 api/storage.ts에서 관련 로직만 변경하면 작동할 수 있습니다.

  링크 - [api/storage.ts](https://github.com/matty255/wanted-pre-onboarding-challenge-fe-1/blob/main/client/src/api/storage.ts)

### todo query들을 custom hook처럼 만들어서 분리하고, 전역 에러 핸들러와 에러바운더리로 오류들을 관리하도록 했습니다.

링크 - [api/querys.ts](https://github.com/matty255/wanted-pre-onboarding-challenge-fe-1/blob/main/client/src/api/querys.ts)

링크 - [index.tsx](https://github.com/matty255/wanted-pre-onboarding-challenge-fe-1/blob/main/client/src/index.tsx)

링크 - [page/SignUp.tsx](https://github.com/matty255/wanted-pre-onboarding-challenge-fe-1/blob/main/client/src/page/SignUp.tsx)

### customRoute를 만들고 pathname과 token 여부를 판별해서 주소를 리다이렉트시켜주도록 했습니다.

링크 - [routes/CustomRoutes.tsx](https://github.com/matty255/wanted-pre-onboarding-challenge-fe-1/blob/main/client/src/routes/CustomRoutes.tsx)

### 캐싱 처리
- 느린 3G 설정에서 실험
- 처음 소환하는 페이지는 느리게, 두번째로 소환하는 페이지는 바로 소환되는걸 볼수 있습니다.
![ezgif com-gif-maker (2)](https://user-images.githubusercontent.com/89088205/185607322-cf0bcada-323e-47ec-b76a-2071e10ecc2c.gif)

### 패칭시 메시지 띄워주기
- 느린 3G 설정에서 실험
- 삭제를 누르면 삭제모달이 뜨고, 삭제를 누르면 삭제와 동시에 패칭됩니다.
- 패칭시에 뒤에 처리중... 메시지가 뜨는것을 볼수 있습니다.
![ezgif com-gif-maker (4)](https://user-images.githubusercontent.com/89088205/185608326-9ebcf299-4c37-4bc7-9412-9e4283ae6999.gif)


## 2. layout : 관련이슈는 여기 [[1 - 첫 리팩토링]](https://github.com/matty255/wanted-pre-onboarding-challenge-fe-1/issues/1) / [[2 - layout]](https://github.com/matty255/wanted-pre-onboarding-challenge-fe-1/issues/13)

### - form

todo form - 할일이나 타이틀 둘 다 입력해야만 넘어갈 수 있습니다.

![todos1](https://user-images.githubusercontent.com/89088205/185606241-bf050c4b-df6b-4730-9e4b-2429430352d3.gif)
![todos2](https://user-images.githubusercontent.com/89088205/185606236-f838c1fd-4f4c-4268-9130-06844c6c2d25.gif)

login form - 아이디와 비밀번호를 맞게 입력해야만 버튼이 활성화됩니다.

![ezgif com-gif-maker](https://user-images.githubusercontent.com/89088205/185606608-c23e425d-471e-4aa9-8834-9518b606f54d.gif)

edit form - 수정하면 실시간으로 반영됩니다. 줄바꿈도 가능합니다.
![ezgif com-gif-maker (3)](https://user-images.githubusercontent.com/89088205/185607787-2021f222-61fc-47bf-a0a4-99a5badd59c9.gif)



#### - darkmode, spinner

- 사용자의 설정에 맞춘 페이지로 진입 + 다크모드 여부를 전환할 수 있게 하고 테마에 맞는 css를 적용했습니다.
- isFetching이나 isLoading, suspense fallback 시 스피너를 달았습니다.

  ![darkmode-login](https://user-images.githubusercontent.com/89088205/185587353-ac5e4973-0ef4-41db-986c-161946a3f88c.gif)

#### - responsive web / modal

- 모바일과 데스크탑, 타블렛을 지원하는 반응형 웹을 제작하였습니다.
- 상단 바는 스크롤을 일정 길이 이상 내렸을때만 접을 수 있습니다.
- detail / create는 모바일 화면에서만 노출됩니다.

![responsive-toggle](https://user-images.githubusercontent.com/89088205/185588055-08386945-e428-4f81-a288-02cc30928efa.gif)

#### - modal

- 모달을 만들어 삭제시, 오류시 모달이 뜨도록 했습니다.

링크 - [common/Modal.tsx](https://github.com/matty255/wanted-pre-onboarding-challenge-fe-1/blob/main/client/src/common/Modal.tsx)

링크 - [common/ModalContent.tsx](https://github.com/matty255/wanted-pre-onboarding-challenge-fe-1/blob/main/client/src/common/ModalContent.tsx)

링크 - [hooks/useModal.tsx](https://github.com/matty255/wanted-pre-onboarding-challenge-fe-1/blob/main/client/src/hooks/useModal.tsx)

![error-boundary](https://user-images.githubusercontent.com/89088205/185589418-902733c4-363c-49b9-8e90-13c177e3701d.gif)

- 에러 바운더리에 모달을 달아서 에러시 팝업이 띄워지도록 했습니다.

링크 - [page/SignUp.tsx](https://github.com/matty255/wanted-pre-onboarding-challenge-fe-1/blob/main/client/src/page/SignUp.tsx)

#### - skeleton

- card에 suspense를 달아서 스켈레톤 ui를 자체구현했습니다.

![skel](https://user-images.githubusercontent.com/89088205/185590108-fb54c889-7002-4517-87a5-bde6d79ba156.gif)

# 더 하면 좋았을 것 / 더 해보고 싶은 것

- JSDoc 어노테이션 : 공식문서에서 문법과 에디트하는 법을 배웠지만 문제는 뭘 쓸지 잘 모르겠다는 것... type들은 대개 써있거나 types.d.ts에 정의되어 있고 내용에 대한 주석을 달려고 하니 이 주석 필요한가 하는 의문만 생겨서 좀 더 공부한 후에 적용해 보기로 하였습니다.

- 배포 : 사실 node.js 서버부분까지 가져와서 각을 맞춘건 배포를 하려는 마음도 있었는데... 그러나 aws 프리티어의 만료로 아쉽게도...ㅠㅠ
- 그치만 저번에 aws 세션 듣고 설문조사해서 50$ 받을게 있으니까 그거 받아서 해볼 생각입니다.

- 좀더 체계적인 이슈 / 리드미 / 커밋 : 단순히 리팩토링이 아니라 기능별로 이슈와 커밋을 분리해서 계획적으로 작업해보기
- 모달에 페이드인 / 페이드아웃 추가
- node.js 강의 듣고 todo에 무한스크롤 기능 추가해보기

# 후기
- 2주간 정말 많은 것을 배웠고, 이렇게 몰입해본적이 없었던 뜻깊은 시간이었습니다.
- 매주 화요일, 토요일에 중간점검이 있고 -> 다음 강의 시간까지 과제를 고쳐오는 방식이었습니다.
- 수강생들이 실습해보면서 따라올 수 있게 단계별로 예시를 들어 잘 구성해주셔서 3~4일 정도로 짧게 짧게 호흡을 가져가며 눈 앞에 있는 과제에 전적으로 몰입할 수 있었습니다. 멘토님의 열정도 열심히 달릴 수 있게 하는 원동력이었습니다. 한명한명의 블로그와 깃헙과 코드를 살펴보시지만 `다이렉트한 조언 = 1의 성장`보다는, `비슷한 고민을 하는 사람들의 코드를 모아서 비교, 분석하고 방향을 제시하기 = 10 +의 성장`이 이루어질 수 있도록 세심하게 배려해주시는 모습이 멋졌습니다.

- 다른 분들의 코드를 보면서 이게 왜 안되는지 생생하게 배울 수 있었고, 제 코드를 보여주고 설명하는 것도 나름 익숙해졌습니다.

- 수업은 끝났지만 리팩토링은 아직 끝나지 않았고... 그리고 앞으로 공부해야 할 방향을 제시해주셔서 감사했습니다!
