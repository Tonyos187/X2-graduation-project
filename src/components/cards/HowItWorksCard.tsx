export type HowItWorksCardProps = {
  step: number;
  title: string;
  description: string;
};

const HowItWorksCard = ({ step, title, description }: HowItWorksCardProps) => {
  return (
    <div className="w-full h-full flex flex-col">
     
      <h4 className="text-White text-base xl:text- leading-[150%] font-medium px-4 py-3.5 xl:px-5 xl:py-4  border-l border-Purple-60">
          Step {String(step).padStart(2, "0")}
      </h4>
     
      <div
        className="h-full bg-[linear-gradient(136deg,#703BF7_0%,rgba(112,59,247,0)_28%))] bg-Grey-15
                   p-px rounded-tl-0 rounded-tr-[10px] xl:rounded-tr-xl rounded-b-[10px] xl:rounded-b-xl"
      >
        <div className="flex flex-col h-full bg-Grey-08 bg-[linear-gradient(136deg,#703BF7_-49.01%,rgba(112,59,247,0)_14%))]  
                        p-[8.4%] xs:p-[7%] md:p-[9%] rounded-tl-0 rounded-tr-[10px] xl:rounded-tr-xl rounded-b-[10px] xl:rounded-b-xl 
                        gap-3.5 md:gap-4 xl:gap-5 relative group">
          <h3 className="text-White text-lg lg:text-xl xl:text-[26px] font-semibold leading-[150%]">
          {title}
        </h3>
        <p className="text-Grey-60 leading-[150%] font-medium  text-sm md:text-base xl:text-lg ">
          {description}
        </p>
        </div>
      </div>
    </div>
  );
};

export default HowItWorksCard;
