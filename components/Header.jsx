import Link from "next/link";
import DesktopMenu from "./DesktopMenu"
import MobileMenu from "./MobileMenu";
function Header() {
  return (
    <>
      <h1>Header</h1>
      <DesktopMenu />
      <br />
      <br />
      <MobileMenu />
    </>
  );
}

export default Header;
