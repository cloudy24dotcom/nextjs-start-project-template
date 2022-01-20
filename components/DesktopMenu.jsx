import Link from "next/link";

function DesktopMenu() {
  return (
    <>
      <Link href="/">
        <a className="nav-link">1. Home (Link)</a>
      </Link>

      <Link href="about">
        <a className="nav-link">2. About (Link)</a>
      </Link>

      <Link href="contact">
        <a className="nav-link">3. Contact (Link)</a>
      </Link>

      <Link href="policy">
        <a className="nav-link">4. Policy (Link)</a>
      </Link>
    </>
  );
}

export default DesktopMenu;
