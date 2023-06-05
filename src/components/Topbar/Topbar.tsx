import Link from "next/link";
import React from "react";
import Image from "next/image";
import Timer from "../Timer/Timer";
import { useRouter } from "next/router";

type TopbarProps = {
  problemPage?: boolean;
};

const Topbar: React.FC<TopbarProps> = ({ problemPage }) => {
  const router = useRouter();

  return (
    <nav className="relative flex h-[50px] w-full shrink-0 items-center px-5 bg-dark-layer-1 text-dark-gray-7">
      <div
        className={`flex w-full items-center justify-between ${
          !problemPage ? "max-w-[1200px] mx-auto" : ""
        }`}
      >
        <Link href="/" className="h-[22px] flex-1">
          <Image src="/logo-full.png" alt="Logo" height={100} width={100} />
        </Link>

        <div className="flex items-center space-x-4 flex-1 justify-end">
          {problemPage && <Timer />}
        </div>
      </div>
    </nav>
  );
};
export default Topbar;
