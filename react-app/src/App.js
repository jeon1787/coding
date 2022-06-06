import logo from './logo.svg';
import './App.css';
//state를 사용하기 위해 useState라는 훅(Hook)을 이용해야 한다.
//(훅은 react에서 기본적으로 제공하는 함수)
import {useState} from 'react';

function Header(props){
  console.log('props',props, props.title);
  return (
    <header>
      <h1><a href="/" onClick={(event)=>{
        //a태그의 기본 동작("/"는 자기 자신을 호출=리로드)를 prevent
        event.preventDefault();
        //이벤트 함수도 props를 통해 전달 받는다.
        props.onChangeMode();
      }}>{props.title}</a></h1>
    </header>
  )
}

function Nav(props){
  const list = []
  for(let i=0; i<props.topics.length; i++){
    let t = props.topics[i];
    //key 속성을 추가하여 list가 태그를 생성할 수 있도록 돕는다.
    list.push(
      <li key={t.id}>
        <a id={t.id} href={'/read/'+t.id} onClick={event=>{
          event.preventDefault();
          //id값을 함수에 전달하고 싶다면 a태그 속성에 '속성명={props로 받은 속성}' 형태로 추가하고
          //'event.target.속성명'으로 입력한다.
          props.onChangeMode(Number(event.target.id));//Number(문자열) : 문자열을 숫자로 컨버팅해준다.
        }}>{t.title}</a>
      </li>
    )
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

function Create(props){
  return (
    <article>
      <h2>Create</h2>
      <form onSubmit={event=>{
        event.preventDefault();
        const title = event.target.title.value;
        const body = event.target.body.value;
        props.onCreate(title, body);//이벤트로 얻어낸 value 값을 props로 태그에 전달해준다.
      }}>
        <p><input type="text" name="title" placeholder="title"></input></p>
        <p><textarea name="body" placeholder="body"></textarea></p>
        <p><input type="submit" value="Create"></input></p>
      </form>
    </article>
  )
}

function App() {

  //모드에 따라 Article이 달라짐
  //방법1)
  //const _mode = useState('WELCOME');//useState(초기state값)함수는 배열을 리턴하고
  //const mode = _mode[0];//배열의 [0]번 인덱스는 state값을 리턴하고
  //const setMode = _mode[1];//배열의 [1]번 인덱스는 state값을 변경할 수 있다.
  //console.log('_mode', _mode);
  //방법2)
  //const[state이름, state를변경하는함수이름] = useState('초기state값');
  const [mode, setMode] = useState('WELCOME');
  const [id, setId] = useState(null);
  const [nextId, setNextId] = useState(4);
  const [topics, setTopics] = useState([
    {id:1, title:'html', body:'html is ...'},
    {id:2, title:'css', body:'css is ...'},
    {id:3, title:'javascript', body:'javascript is ...'}
  ]);
  let content = null;

  if(mode === 'WELCOME'){
    content = <Article title="Welcome" body="Hello, WEB"></Article>
  }else if(mode === 'READ'){
    let title, body = null;
    for(let i=0; i<topics.length;i++){
      if(topics[i].id === id){
        title = topics[i].title;
        body = topics[i].body;
      }
    }
    content = <Article title={title} body={body}></Article>
  }else if(mode === 'CREATE'){
    content = <Create onCreate={(_title,_body)=>{
      //등록
      const newTopic = {id:nextId, title:_title, body:_body}
      const newTopics = [...topics]
      newTopics.push(newTopic)
      setTopics(newTopics);
      //화면이동
      setMode('READ');
      setId(nextId);
      setNextId(nextId+1);
    }}></Create>
  }

  return (
    <div>
      {/* 홈이동 헤더 영역 */}
      <Header title="WEB" onChangeMode={()=>{
        setMode('WELCOME');//모드 재정의
      }}></Header>

      {/* 페이지 이동 영역 */}
      <Nav topics={topics} onChangeMode={(_id)=>{
        setMode('READ');//모드 재정의
        setId(_id);
      }}></Nav>

      {/* 본문 영역 */}
      {content}
      <a href="/create" onClick={event=>{
        event.preventDefault();
        setMode('CREATE');
      }}>Create</a>
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

//6강)
//event(이벤트)
// 1. 이벤트시 실행할 함수도 props를 통해 전달받는다.
// 2. onClick={function(event){실행할 내용ex. props.onChangeMode();}}의 형태로 태그 속성에 추가해준다.
// 3. 화살표함수 사용가능
// ※ 화살표함수
//    - function을 없애고 화살표를 넣는다.
//      function(){} 을 ()=>{} 로 변경
//    - ()안에 매개변수가 하나면 ()생략 가능
//      (event)=>{} 를 event=>{} 로 생략
// 4. 이벤트에 매개변수를 전달하고 싶다면 태그에 속성을 추가하고 속성값으로 매개변수를 넣어준다.
//    그리고 함수에서 'event.target.속성명'으로 매개변수를 받아온다.

//7강)
//state(상태)
// 1. prop과 공통점 : UI를 리턴함
// 2. prop와 차이점 : prop은 컴포넌트를 사용하는 외부자를 위한 데이터
//                   state는 컴포넌트를 만드는 내부자를 위한 데이터
// 3. state를 사용하기 위해 useState라는 훅(Hook)을 이용해야 한다.(state가 변경되면 App을 재실행 해준다.)
//    (훅은 react에서 기본적으로 제공하는 함수)
//    ex. import {useState} from 'react';
// 4. useState(초기state값)함수는 배열을 리턴하고
//    배열의 [0]번 인덱스는 state값을 리턴하고 배열의 [1]번 인덱스는 state값을 변경할 수 있다.

//8강)
//create
// 1.
//  PRIMITIVE(원시타입) : const [value, setValue] = useState(1);//숫자
//                       setValue(2);
//  Object(객체) :       const [value, setValue] = useState([1]);//배열
//                       newValue = [...value]//...세개 필수(복사를 의미함)
//                       newValue.push(2);//복사한 데이터를 변경하고
//                       setValue(newValue);//복사한 데이터를 set한다.
//※참고)https://seomal.com/map/1/55