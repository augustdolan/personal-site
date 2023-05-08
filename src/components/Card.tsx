import Image from "next/image";
import Link from "next/link";

const Card = ({
  src,
  title,
  link,
  description,
  icon,
  iconLink,
}: {
  src: string;
  title: string;
  link: string;
  description?: string;
  icon?: string;
  iconLink?: string;
}) => {
  return (
    <Link className="h-[350px] rounded-md border-2 border-solid border-gray-200 p-4" target="_blank" href={link}>
      <li className="flex flex-col">
        <Image
          className="mb-4 self-center"
          width={150}
          height={150}
          src={src}
          alt={title}
        />
        <h3 className="border-t-2 pt-4 text-xl font-bold">{title}</h3>
        {description && <p className="text-sm italic text-gray-500">{description}</p>}
        {icon && (
          <Link className="self-end" target="_blank" href={iconLink || link}>
            <Image src={icon} width={42} height={42} alt="icon" />
          </Link>
        )}
      </li>
    </Link>
  );
};

export default Card;
