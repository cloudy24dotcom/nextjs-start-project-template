import Link from "next/link";
import DesktopMenu from "./DesktopMenu";
import MobileMenu from "./MobileMenu";
import Logo from "./Logo";
function Header() {
  return (
    <>
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
