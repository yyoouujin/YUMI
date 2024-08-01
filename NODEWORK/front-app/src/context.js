//공용 로그인 정보
//전역적으로 상태를 공유할 수 있도록 도와주는 도구
import { createContext } from "react";

let login = {userid:"채유진", isLogin:true};
export const LoginContext = createContext(login);


/*
const는 default 가 안된다!
읽을때도 중괄호로 읽어들이기
Comp02_Condition.js 파일 내
import { LoginContext } from "./context";


*/
