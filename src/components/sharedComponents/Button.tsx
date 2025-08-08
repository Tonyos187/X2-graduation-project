const Button = ({
  content,
  className,
  withBorder
}: {
  content: string;
  className?: string;
  withBorder?:boolean
}) => {
  return (
    <button
      className={`text-white text-sm md:text-base text-nowrap px-5 py-3.5 md:px-6 md:py-4.5 rounded-[10px] h-15 cursor-pointer 
        ${withBorder && "border border-Grey-15"} ${className}`}
    >
      {content}
    </button>
  );
};

export default Button;
