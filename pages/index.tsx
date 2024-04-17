import Image from "next/image";
import { Inter } from "next/font/google";
import { Console } from "console";

const inter = Inter({ subsets: ["latin"] });

interface props {
  [key: string]: any;
}
type MenuItem {
  id : number,
  title: string
}
export default function Home(props:props) {
  const menu : MenuItem[] = props.menu;
  return (
    <div id='wrapper' className={inter.className}>
      <div className='menu'>
        <ul>
          { menu.length > 0 ? 
              menu.map((item,index)=>(
                <li key={index}>
                  ID:{item.id}<br/>
                  標題:{item.title}
                </li>
              ))   
          :''}          
        </ul>
      </div>
    </div>
  );
}


export async function getServerSideProps() {
  const menuUrl = new URL('/api/menu', process.env.APP_URL);
  const menuRes = await fetch(menuUrl);
  const menu = await menuRes.json();
  return {
    props: {
      menu
    },
  };
}
