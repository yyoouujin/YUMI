/*
fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => response.json())
      .then(json => console.log(json))

/*
package.json 파일 내 "type" : "module" 쓰면 import로 쓰기 = ES module 이 되는거임
import axios from 'axios'; 
*/

//require 을 쓰면 common module
let axios = require("axios");

axios.get('https://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchWeeklyBoxOfficeList.json?key=f5eef3421c602c6cb7ea224104795888&targetDt=20120101')
.then(result => console.log(result.data));
