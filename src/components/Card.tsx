import Image from "next/image";
import Link from "next/link";

const Card = ({
  src,
  title,
  description,
  link,
  icon,
  iconLink,
}: {
  src: string;
  title: string;
  description: string;
  link: string;
  icon?: string;
  iconLink?: string;
}) => {
  return (
    <li className="rounded-md border-2 border-solid border-gray-200 p-4">
      <Link className="flex flex-col" target="_blank" href={link}>
        <Image
          className="mb-4 self-center"
          width={150}
          height={150}
          src={src}
          alt={title}
        />
        <h3 className="border-t-2 text-xl font-bold">{title}</h3>
        <p className="text-sm italic text-gray-500">{description}</p>
        {icon && (
          <Link className="self-end" target="_blank" href={iconLink || link}>
            <Image src={icon} width={42} height={42} alt="icon" />
          </Link>
        )}
      </Link>
    </li>
  );
};

export default Card;
