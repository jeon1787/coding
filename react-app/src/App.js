import logo from './logo.svg';
import './App.css';

function Header(props){
  console.log('props',props, props.title);
  return (
    <header>
      <h1><a href="/">{props.title}</a></h1>
    </header>
  )
}

function Nav(props){
  const list = []
  for(let i=0; i<props.topics.length; i++){
    let t = props.topics[i];
    list.push(<li key={t.id}><a href={'/read/'+t.id}>{t.title}</a></li>)
  }
  return (
    <nav>
      <ol>
        {list}
      </ol>
    </nav>    
  )
}

function Article(props){
  return (
    <article>
      <h2>{props.title}</h2>
      {props.body}
    </article>
  )
}

function App() {
  const topics = [
    {id:1, title:'html', body:'html is ...'},
    {id:2, title:'css', body:'css is ...'},
    {id:3, title:'javascript', body:'javascript is ...'}
  ]
  return (
    <div>
      {/* 홈이동 헤더 영역 */}
      <Header title="WEB"></Header>

      {/* 페이지 이동 영역 */}
      <Nav topics={topics}></Nav>

      {/* 본문 영역 */}
      <Article title="Welcome" body="Hello, WEB"></Article>
    </div>
  );
}

export default App;

//4강)
//react에서 사용자 정의 태그(component) 만들기
// 1. function + 대문자 시작 단어 : react에서 사용자 정의 태그는 반드시 대문자로 시작
// 2. react의 사용자 정의 태그를 '컴포넌트(component)'라고 말한다.

//5강)
//prop(속성)
// 1. props는 객체의 형태로 component function에 전달 된다.
// 2. props 객체의 각 속성값에 접근하기 위해서 "props.속성명"을 사용한다.
// 3. 태그 안에 입력하기 위해 {}표현식을 사용한다.(중괄호 안은 문자열이 아닌 표현식으로 취급)
// 4. 태그 안에 {배열명}을 입력하면 react가 자동으로 배열의 원소들을 하나씩 꺼내서 태그 안에 배치시켜준다.
// 5. react는 배열로 자동으로 생성한 태그의 경우({list})에는 react가 이 태그들을 추적할 때의 근거가 되는 key라는 prop을 제공해야한다.(안 하면 error 발생)