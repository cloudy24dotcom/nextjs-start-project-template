import Link from "next/link";

function MobileMenu() {
  return (
    <>
      <Link href="/">
        <a className="nav-link">1. m.Home (Link)</a>
      </Link>

      <Link href="about">
        <a className="nav-link">2. m.About (Link)</a>
      </Link>

      <Link href="contact">
        <a className="nav-link">3. m.Contact (Link)</a>
      </Link>

      <Link href="policy">
        <a className="nav-link">4. m.Policy (Link)</a>
      </Link>
    </>
  );
}

export default MobileMenu;
