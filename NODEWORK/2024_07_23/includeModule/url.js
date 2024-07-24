const myURL = new URL('https://example.org8080/foo?username=choi#bar');

console.log(myURL.search); // ?username=choi
//getParameter
console.log(myURL.searchParams.get('username')); // choi
console.log(myURL.protocol); //https:
console.log(myURL.pathname); //foo
console.log(myURL.hash); //#bar

