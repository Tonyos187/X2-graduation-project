export type HowItWorksCardProps = {
  step: string;
  title: string;
  description: string;
};

const HowItWorksCard = ({ step, title, description }: HowItWorksCardProps) => {
  return (
    <div className="w-full md:max-w-[91.5384%] lg:max-w-[32.2908%] xl:max-w-[31.3087%] mx-auto">
      <div className="px-4 py-3.5 xl:px-5 xl:py-4 border-l border-Purple-60 bg-Grey-08">
        <p className="text-White text-[16px] xl:text-[20px] font-medium">
          Step {step}
        </p>
      </div>
      <div className="content bg-[linear-gradient(120.79deg,#703BF7_-49.01%,rgba(112,59,247,0)_13.65%))]  p-[30px] lg:p-[40px] xl:p-[50px] custom-border rounded-tr-[10px] rounded-bl-[10px] rounded-br-[10px] xl:rounded-tr-[12px] xl:rounded-bl-[12px] xl:rounded-br-[12px] rounded-tl-0">
        <h4 className="text-White text-[18px] lg:text-[20px] xl:text-[26px] font-semibold mb-3.5 lg:mb-4 xl:mb-5">
          {title}
        </h4>
        <p className="text-Grey-60 leading-[150%] font-medium  text-[14px] lg:text-[16px] xl:text-[18px] max-w-[297px] lg:max-w-[333px] xl:max-w-[500px] ">
          {description}
        </p>
      </div>
    </div>
  );
};

export default HowItWorksCard;
