//fileWriteTest.js
//fs.writeFile(file, data[, options], callback)
//fs.writeFile('파일명[파일경로]', [파일 내 데이터])

import fs from 'fs'; 

/*
fs.writeFile('c:/temp/text.txt', 'hello Yujin', err => {
  if (err) {
    throw err;
  } else {
    console.log('file write 끗~');
  }
})
*/

//fs.writeFile('text.txt', 'hello Yujin') -> 현재 디렉토리 위치에 text.txt 파일이 생성된다
fs.writeFile('yujin.txt', 'hello Yujin', err => {
  if (err) {
    throw err;
  } else {
    console.log('file write 끗~');
  }
})
('이건 비동기라 먼저 나와용! :  \{^_^}/ hi!');
