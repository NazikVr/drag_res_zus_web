import Link from "next/link";
import DraggableCards from "../src/components/DraggableCards/DraggableCards";
import  ListRender  from "../src/components/ListRender/ListRender";
export default function Home() {
  return (
    <>
      <Link href="/btc">BTC transactions</Link>
      <Link href="/cards">Dragable and Resizeble cards</Link>
    </>
  );
}
