import Image from "next/image";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });
const aa : number =121;

export default function Home() {
  return (
    <div id='wrapper' className={inter.className}>
      <h1>{aa}</h1>
    </div>
  );
}
