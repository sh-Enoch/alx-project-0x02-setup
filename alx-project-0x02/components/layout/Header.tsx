import React from "react";
import Link from "next/link";

function Header() {
  return (
    <section>
      <nav>
        <Link href="/home">Home</Link>
        <Link href="/about">About</Link>
      </nav>
    </section>
  );
}

export default Header;
