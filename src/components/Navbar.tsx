import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="py-4 px-3 sm:px-16 fixed w-full bg-emerald-950 z-10">
      <ol className="flex flex-row flex-wrap gap-4 justify-center sm:justify-end items-center">
        <li className="hover:text-peach"><Link href="/#about">About</Link></li>
        <li className="hover:text-peach"><Link href="/#projects">Projects</Link></li>
        <li className="hover:text-peach"><Link href="/#contact">Contact</Link></li>
        <li className="hover:text-peach"><Link href="/resume">Resume</Link></li>
      </ol>
    </nav>
  );
};

export default Navbar;
