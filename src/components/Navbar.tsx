import Link from "next/link";
import Button from "./Button";

const Navbar = () => {
  return (
    <nav className="my-6 fixed right-32">
      <ol className="flex flex-row flex-wrap gap-4 justify-end items-center">
        <li className="hover:text-peach"><Link href="#about">About</Link></li>
        <li className="hover:text-peach"><Link href="#projects">Projects</Link></li>
        <li className="hover:text-peach"><Link href="#contact">Contact</Link></li>
        <Button href="/resume" text="Resume" />
      </ol>
    </nav>
  );
};

export default Navbar;
