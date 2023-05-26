import s from "./styles/page.module.scss";
import { Be_Vietnam_Pro } from "next/font/google";

// export const be_vietnam_pro = Be_Vietnam_Pro({
//   variable: "--vietnam-pro",
//   weight: ['400', '500', '700'],
//   subsets: ["latin"],
// });

export default function Home() {
  return (
    <main className={s.main}>
      <h1>Whereas recognition of the inherent dignity</h1>
    </main>
  );
}

// export default function Home() {
//   return (
//     <main className={be_vietnam_pro.className} >
//       <h1>Whereas recognition of the inherent dignity</h1>
//     </main>
//   );
// }
