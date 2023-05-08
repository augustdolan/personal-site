import Link from "next/link";

const Button = ({ text, href, padding = "py-2" }: { text: string, href:string, padding?:string }) => {
  return (
    <Link
      href={href}
      className={`w-40 rounded-md border-2 border-solid border-emerald-200 ${padding} text-center text-emerald-200 transition hover:-translate-x-px hover:-translate-y-px hover:border-peach hover:text-peach hover:shadow-md hover:shadow-peach`}
    >
      {text}
    </Link>
  );
};

export default Button;