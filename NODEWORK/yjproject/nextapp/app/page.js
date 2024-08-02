import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <ul>
        <li><a href="/sub/">page.js</a></li>
        <li><Link href="/sub/">page.js</Link></li>
        <li><a href="/sub/blog/2">slug Page</a></li>
        <li><a href="/api">api</a></li>
      </ul>
      
      
    </div>
  );
}
