//Event.js (e.stopPropagation(); -> 이벤트 전파 방지!)

function Button({children, msg}) { 
  return (<button onClick={msg}>{children}</button>);
}

function PlayButton({children}){
  return <Button msg={ () => {alert ({children});}}>{children} 버튼</Button>;
}

function UploadButton({children}){
  return <Button msg={() => {alert ({children});}}>{children} 버튼</Button>;
}

export default function Toolbar() {
  return (
    <>
      <PlayButton>play</PlayButton>
      <UploadButton>upload</UploadButton>
    </>
  );
}
