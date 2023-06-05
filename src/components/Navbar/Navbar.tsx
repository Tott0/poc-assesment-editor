import Image from "next/image";
import Link from "next/link";
import React from "react";
type NavbarProps = {};

const Navbar: React.FC<NavbarProps> = () => {
  return (
    <div className="flex items-center justify-between sm:px-12 px-2 md:px-24">
      <Link href="/" className="flex items-center justify-center h-20">
        <Image src="/logo.png" alt="LeetClone" height={200} width={200} />
      </Link>
    </div>
  );
};
export default Navbar;
