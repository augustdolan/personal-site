import Link from "next/link";
import Button from "./Button";

const Navbar = () => {
  return (
    <nav className="py-4 px-32 fixed w-full bg-emerald-950 z-10">
      <ol className="flex flex-row flex-wrap gap-4 justify-end items-center">
        <li className="hover:text-peach"><a href="/#about">About</a></li>
        <li className="hover:text-peach"><a href="/#projects">Projects</a></li>
        <li className="hover:text-peach"><a href="/#contact">Contact</a></li>
        <Button href="/resume" text="Resume" />
      </ol>
    </nav>
  );
};

export default Navbar;
