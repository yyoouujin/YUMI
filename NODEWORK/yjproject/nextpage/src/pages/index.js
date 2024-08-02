import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div>
      <h1>Next.js</h1>
      <ul>
        <li><a href="/sub">/pages/sub/index.js</a></li>
        <li><a href="/sub/about">/pages/sub/about.js</a></li>
        <li><a href="/sub/product">/pages/sub/product.js</a></li>
        <li><a href="/sub/fetch">fetch</a></li>
      </ul>
    </div>
  );
}


/*
<li><a href="/sub/1">/pages/sub/[id].js</a></li>
=> localhost/sub/2
*/
