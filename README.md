# wanted-pre-onboarding-challenge-fe-1

원티드 프리온보딩 챌린지 프론트엔드
- 열심히 리팩토링하는중

- 과제 1주차 (1/2)
- [리팩토링 과정 회고록 1](https://velog.io/@matt2550/%EC%9B%90%ED%8B%B0%EB%93%9C-%ED%94%84%EB%A6%AC%EC%98%A8%EB%B3%B4%EB%94%A9-%EC%B1%8C%EB%A6%B0%EC%A7%80)

# 1-1) 사전과제 진행 가이드

- 제공해드리는 API Repository를 활용하여 가이드에 따라 `Todo App`을 작성, 본인의 github에 `Public`으로 올려주세요. ✅
- 완성한 과제는 모집 마감 후 설문 조사를 통해 제출해주세요. (개강 시 설문 조사 링크 전달 예정) ✅
- 제출 레파지토리 명은 `wanted-pre-onboarding-challenge-fe-1`로 생성해 주세요. ✅
- 과제 수행 개수에 따라 기본적인 평가가 이루어지며, 커리큘럼 운영 과정에서 최소한의 수준을 파악하기 위한 용도입니다. ✅
- 코드의 일관성, 가독성, 함수 분리, 컴포넌트 설계, 코드 퀄리티 등을 기준으로 세부적인 평가가 이루어집니다. ✅
- 해당 과제에 대한 해설은 개강 후 진행될 예정입니다. ✅
- `README.md`를 꼭 작성해 주세요. 본인에 대한 소개나 프로젝트 소개 등 자유롭게 작성해주시면 됩니다. ✅
- 반드시 함수 컴포넌트로 개발해주세요. (React Hooks) ✅

# 1-2) 클라이언트 구현 과제 안내

## Assignment 1 - Login / SignUp

- /auth 경로에 로그인 / 회원가입 기능을 개발합니다
  - [✅] 로그인, 회원가입을 별도의 경로로 분리해도 무방합니다
    - 주소만 분리하고 컴포넌트는 분리하지 않았습니다.

  - [✅] 최소한 이메일, 비밀번호 input, 제출 button을 갖도록 구성해주세요
    - 로그인은 이메일, 비밀번호. 회원가입은 이메일, 비밀번호, 비밀번호 확인 인풋을 가지고 있습니다.

- 이메일과 비밀번호의 유효성을 확인합니다
  - [✅] 이메일 조건 : 최소 `@`, `.` 포함
  - [✅] 비밀번호 조건 : 8자 이상 입력
  - [✅] 이메일과 비밀번호가 모두 입력되어 있고, 조건을 만족해야 제출 버튼이 활성화 되도록 해주세요
    - 디바운스를 적용해서 조건에 모두 맞았을 경우만 버튼을 활성화하고, 각 에러에 대한 메시지를 인풋 하단에 띄워주었습니다.

- 로그인 API를 호출하고, 올바른 응답을 받았을 때 루트 경로로 이동시켜주세요
  - [✅] 응답으로 받은 토큰은 로컬 스토리지에 저장해주세요
    - 토큰을 로컬 스토리지에 저장하고, axios instance에 디폴트로 담아 보낼 수 있게 했습니다.

  - [✅] 다음 번에 로그인 시 토큰이 존재한다면 루트 경로로 리다이렉트 시켜주세요
    - 각 페이지 컴포넌트 안에 토큰이 없거나 value가 ""인 경우 /sign으로 리다이렉트할 수 있게 && 연산자를 사용했습니다. 

  - [✅] 어떤 경우든 토큰이 유효하지 않다면 사용자에게 알리고 로그인 페이지로 리다이렉트 시켜주세요
    - getToDos나 addToDo 요청 실패시 토큰을 비우고 로그인 페이지로 가도록 했습니다.


## Assignment 2 - Todo List

- Todo List API를 호출하여 Todo List CRUD 기능을 구현해주세요
  - [✅] 목록 / 상세 영역으로 나누어 구현해주세요.
    - 따로 따로 구현했다가 이후 내용을 더 읽고 한 화면에서 보여지게 했습니다.

  - [✅] Todo 목록을 볼 수 있습니다.
    - axios와 react-query를 이용하여 리스트를 불러오고 있습니다.

  - [✅] Todo 추가 버튼을 클릭하면 할 일이 추가 됩니다.
    - 상단에 todo를 추가할 수 있는 인풋을 만들었습니다.

  - [✅] Todo 수정 버튼을 클릭하면 수정 모드를 활성화하고, 수정 내용을 제출하거나 취소할 수 있습니다.
    - components/toDo/Card.tsx에서 useState를 이용해 수정모드 진입시 해당 p태그가 인풋으로 변하게 구현했습니다.

  - [✅] Todo 삭제 버튼을 클릭하면 해당 Todo를 삭제할 수 있습니다.
    - toDo 삭제시 react-query의 뮤테이션 기능을 이용해 반영이 실시간으로 되게 했습니다.

- 한 화면 내에서 Todo List와 개별 Todo의 상세를 확인할 수 있도록 해주세요.
    - 화면을 반으로 나누어 한쪽에는 리스트 카드들, 다른 한쪽에는 디테일 페이지가 보여지도록 했습니다.

  - [✅] 새로고침을 했을 때 현재 상태가 유지되어야 합니다.
    - react-router-dom을 이용하여 쿼리스트링을 구현해서 디테일페이지의 상태를 보존했습니다.

  - [✅] 개별 Todo를 조회 순서에 따라 페이지 뒤로가기를 통하여 조회할 수 있도록 해주세요.
    - react-router-dom을 이용하여 동적라우팅을 적용하여 주소만 바뀌고 컴포넌트는 그대로 있도록 해주었습니다.

- 한 페이지 내에서 새로고침 없이 데이터가 정합성을 갖추도록 구현해주세요
  - [✅] 수정되는 Todo의 내용이 목록에서도 실시간으로 반영되어야 합니다
    - 각 카드가 수정, 삭제된 경우에도 에러가 나지 않도록 recoil을 이용하여 클라이언트 측 데이터를 바꿔주었습니다.


# 2-1) 파일 실행법!
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
16. yarn start

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

