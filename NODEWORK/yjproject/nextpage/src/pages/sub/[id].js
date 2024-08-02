//=> localhost/sub/2 

import { useRouter } from "next/router"

export default function Id(){
  const router = useRouter();
  const id = router.query.id;
  return(
    <>
    <h1>/pages/sub/[id].js</h1>
    <h3><b>ID : </b>{id}</h3>
    <a href="/">pages/index.js</a>
    </>
  )
}