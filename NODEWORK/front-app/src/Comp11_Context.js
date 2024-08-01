import { createContext, useContext } from "react";
import { ThemeProvider } from "react-bootstrap";

//모든 컴포넌트 내에서 사용될 공용 변수
const ThemeDefault = {border:"10px solid green" , color:"black"}; 
//부모가 provide:(제공) , 자식은 use
const ThemeContext = createContext(ThemeDefault);

function Sub1() {
  const theme = useContext(ThemeContext);
  return(
    <ThemeContext.Provider value={ {border:"10px solid pink" , color:"white"} }>
    <div style={theme}>
      <h1>Sub1</h1>
      <Sub2 />
    </div>
    </ThemeContext.Provider>
  )
}

function Sub2() {

  return(
    <div>
      <h1>Sub2</h1>
      <Sub3 />
    </div>
  )
}

function Sub3() {
  return(
    <div>
      <h1>Sub3</h1>
    </div>
  )
}


export default function App() {
  const theme = useContext(ThemeContext);
  return(
    <div className="root" style={theme}>
      <h1>Hello World!</h1>
      <Sub1 />
    </div>
  );
}

/*
createContext ?
 : 전역 데이터를 담고 있는 하나의 저장공간.
 컴포넌트가 트리 상 아래에 위한 모든 곳에 데이터를 제공.

*/
