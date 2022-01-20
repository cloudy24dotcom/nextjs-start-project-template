import Link from "next/link";
import DesktopMenu from "./DesktopMenu";
import MobileMenu from "./MobileMenu";
import Logo from "./Logo";
import MetaInfo from "./MetaInfo";
function Header() {
  return (
    <>
    <MetaInfo />
      <Logo />
      <h1>Header</h1>
      <DesktopMenu />
      <br />
      <br />
      <MobileMenu />
    </>
  );
}

export default Header;
