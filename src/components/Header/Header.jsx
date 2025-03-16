import Link from "next/link";
import scss from "./Header.module.scss"

const Header = () => {
  return (
    <header className={scss.headerLinks}>
      <Link href="/btc" className={scss.headerLink}>
        BTC transactions
      </Link>
      <Link href="/cards" className={scss.headerLink}>
        Dragable and Resizeble cards
      </Link>
    </header>
  );
};

export default Header;
