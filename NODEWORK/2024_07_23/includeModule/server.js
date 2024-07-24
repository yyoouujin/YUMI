//server.js

import http from "http";

//서버 만들기
let server = http.createServer( (req, res) => {
  res.end('hello');
});

/*
listen 함수 : 지정된 포트 및 호스트이름으로 수신 대기
Server.listen(port?: number, 
              hostname?: string, 
              backlog?: number, 
              listeningListener?: () => void)
http.Server<typeof http.IncomingMessage, typeof http.ServerResponse> (+8 overloads)
*/
server.listen(3000,'localhost', function() {
  console.log(`http://localhost:3000 server running`);
});

//실행 후 ctrl + 주소클릭 : 서버실행
//ctrl + c : 서버중지


