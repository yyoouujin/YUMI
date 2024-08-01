import styled from 'styled-components';

const ReactButton = (props) => { 
  return <button className={props.className}>{props.children}</button>; 
};

const ReactLargeButton = styled(ReactButton)` 
  font-size: 20px; 
  background-Color:tomato;
  color: green; 
`; 

const PrimaryButton = styled(ReactButton)`
  color:${function(props){

    return (props.stock>20) ? 'blue' : 'red';

  }};
`;

export default function App() {
  return(
    <>
    <ReactLargeButton stock="50">토마토(스타일버튼)</ReactLargeButton><br></br>
    <PrimaryButton stock="10">파란색(function버튼)</PrimaryButton>
    </>
  );
}

/*

styled components
 : 스타일이 적용된 컴포넌트를 쉽게 만들 수 있고, 이미 존재하는 컴포넌트를 래핑해서 스타일이 적용된 새로운 컴포넌트로 생성 
> npm install styled-components 후 사용!

styled components function도 쓸 수 있다!

*/
