import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

//id가 root인 태그
const root = ReactDOM.createRoot(document.getElementById('root'));
//root 태그 안에 렌더링
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

//1~2강)
//생활코딩 react.js 강의에서는 클래스(class)문법이 아닌 함수(function)문법을 사용

//react 설치하기(node.js 설치후)
// 1. new Terminal 열어서
// 2. "npx create-react-app ." 명령어 실행 : 현재 폴더에 react 설치
//react 개발환경 실행하기 : port를 정해서 실행해줌
// 1. "npm start" 명령어 실행
// 2. ctrl + c 로 개발환경 종료
//react 배포판 만들기 : build 폴더와 그 안에 index.html 파일이 생성됨
// 1. "npm run build" 명령어 실행
//react 빌드 실행 : build 폴더를 배포하고(build) 그 안의 index.html로 사용자가 접근하도록 함(-s)
// 1. "npx serve -s build" 명령어 실행
// 2. ctrl + c 로 빌드 종료
//※단, 배포(빌드)의 경우 배포판 생성시 프로그램임, 수정사항을 반영하려면 다시 빌드해줘야 함

//react의 특징
// 1. 정적인 SSR(Server Side Rendering : 서버 사이드에서 html로 전달)과 달리
//    동적인 CSR(Client Side Rendering : 필요한 데이터만 json으로 전달)이며
//    단일 페이지로 구성된 어플리케이션(SPA)이다.
// 2. SPA인 react는 index.html 이외에는 html 없이 js로 재렌더링을 진행한다.

//react의 장점
// 1. 사용자 정의 태그(component) : react에서 독립된 부품으로 기능
//    - 긴 코드를 컴포넌트 하나로 간단하게 줄일 수 있다.
//    - 각각의 컴포넌트가 이름을 가지고 있기 때문에 어떤 취지로 만든 코드인지 알 수 있다.
//    - 재사용성이 높으며, 컴포넌트를 제공하는 함수를 수정함으로써 동시 수정이 가능하다.
// 2. 커다란 react 생태계
//    - 내가 만든 컴포넌트를 타인이 사용하게 하고, 타인이 만든 컴포넌트를 내가 사용할 수 있어 생산성을 획기적으로 향상시킨다.

//3강)
//react 수정하기
// 1. <App />태그는
//    import App(태그명명) from './App'(컴포넌트 위치);
//    를 통해서 임포트 된다.
// ※ 참고 : ./App은
//    "." : 현재 디렉토리(src)
//    "/" : 아래의
//    "App" : App.js 폴더를 의미