import { Link } from "react-router-dom";

const Button = ({
  content,
  className,
  withBorder,
  link="/"
}: {
  content: string;
  className?: string;
  withBorder?:boolean;
  link?: string
}) => {
  return (
    <button
      className={`text-white text-sm md:text-base xl:text-[18px] text-nowrap cursor-pointer
          px-3 py-2.5 xs:px-5 xs:py-3.5 md:px-6 md:py-4.5 rounded-lg xl:rounded-[10px]
          flex items-center justify-center
        ${withBorder && "border border-Grey-15"} ${className}`}
    >
      <Link to={link}>{content}</Link>
    </button>
  );
};

export default Button;
