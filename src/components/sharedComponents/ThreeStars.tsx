/**
 * ThreeStars Component
 * --------------------
 * Renders a group of three decorative star-like shapes using the `Star` component.
 * - The first star is larger and uses the default golden-like color (`bg-star`).
 * - The second and third stars are smaller and use a secondary color (`bg-seconderyStar`).
 * - The size of each star is responsive (adjusts across breakpoints: base, md, 2xl).
 * - Used for decorative UI elements (e.g., rating, badges, visual highlights).

 * Star Component
 * --------------
 * A customizable visual element representing a star using 4 rounded divs positioned at each corner.
 * 
 * Note:
 * - The visual trick is made by overlapping the 4 quarter-circle backgrounds around a central point.
 */

function ThreeStars() {
  return (
    <div className="flex items-center justify-between gap-1.5 w-fit overflow-hidden">
      <Star ></Star>
      <Star widthClass="w-3 md:w-[14.4px] 2xl:w-4.5 h-3 md:h-[14.4px] 2xl:h-4.5" colorClass="bg-seconderyStar" ></Star>
      <Star widthClass="w-[5.6px] md:w-[6.72px] 2xl:w-[8.4px] h-[5.6px] md:h-[6.72px] 2xl:h-[8.4px]" colorClass="bg-seconderyStar" ></Star>
    </div>
  );
}

export default ThreeStars;

function Star({
  colorClass = "bg-star",
  widthClass= "w-5 md:w-6 2xl:w-7.5 h-5 md:h-6 2xl:h-7.5"
}: {
  colorClass?: string;
  widthClass?:string;
}) {
  return (
    <div className={`relative z-0 ${widthClass} ${colorClass}`}>
      <div className={`absolute z-10 rounded-full ${widthClass} bg-bg top-1/2 right-1/2`}></div>
      <div className={`absolute z-10 rounded-full ${widthClass} bg-bg top-1/2 left-1/2`}></div>
      <div className={`absolute z-10 rounded-full ${widthClass} bg-bg bottom-1/2 right-1/2`}></div>
      <div className={`absolute z-10 rounded-full ${widthClass} bg-bg bottom-1/2 left-1/2`}></div>
    </div>
  );
}
