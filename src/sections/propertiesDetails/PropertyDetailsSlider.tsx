import { useEffect, useState } from "react"
import { PropertyDetailsData } from "../../data/PropertyDetails/PropertyDetailsData";
import Next from "../../svg/Next";
import Previous from "../../svg/Previous";

interface Image{
    image: string
}

function PropertyDetailsSlider() {

    const[images,setImages] = useState<Image[]> ([]);
    const[currentIndex,setCurrentIndex]=useState<number>(0);
    // check if screen is mobile
    const [isMobile, setIsMobile] = useState<boolean>(window.innerWidth <= 1024);
    // show 1 or 2 images depending on screen size
    const imagesPerSlide : number = isMobile ? 1 : 2;
    // slice current images to display
    const currentImages :Image[] = images.slice(currentIndex,currentIndex + imagesPerSlide);
    const ImagesData : Image[] = PropertyDetailsData.PropertyImages ? PropertyDetailsData.PropertyImages : [];
    const ImageScroll = [...ImagesData,...ImagesData]
    //set images and update on window resize
    useEffect(() => {
        setImages(ImagesData)
        const handleResize = () => setIsMobile(window.innerWidth <= 1024);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    },[])
    // Go to previous slide
    const prev =() => {
        if(currentIndex - imagesPerSlide >= 0){
            setCurrentIndex(currentIndex - imagesPerSlide)
        }
    }
    // Go to next slide
    const next =() => {
        if(currentIndex + imagesPerSlide < images.length){
            setCurrentIndex(currentIndex + imagesPerSlide)
        }
    }

    return (
            <div className="w-full bg-Grey-10 p-[20px] md:p-[40px] laptop:p-[50px] flex flex-col gap-5 laptop:gap-7.5 rounded-xl border border-Grey-15">
                
                <div className="flex flex-col-reverse md:flex-col gap-5 laptop:gap-7.5">
                    {/* Thumbnails */}
                    <div className="overflow-hidden w-full bg-Grey-08 py-2.5 md:py-5 relative rounded-xl" >
                        <div className="absolute left-0 top-0 w-28 h-full z-10 bg-gradient-to-r from-bg  to-transparent" />
                        <div className="absolute right-0 top-0 w-28 h-full z-10 bg-gradient-to-l from-bg to-transparent" />
                        <div className="flex w-full scroll  md:gap-5 gap-2.5">
                            {ImageScroll.map((img,index) => {
                                return(
                                    <div className="relative "  key={index} >
                                        <img className="w-[67px] h-[41px] min-w-[67px] sm:w-[122px] sm:h-[74px] sm:min-w-[122px] laptop:w-[144px] laptop:h-[94px] laptop:min-w-[144px] laptop:rounded-lg rounded-md"src={img.image}/>
                                        {/* Overlay hover effect */}
                                        <div className="absolute top-0  w-full h-full bg-overlay bg-opacity-40 hover:opacity-0 "></div>
                                    </div>
                                )
                            })}
                            
                        </div>
                    </div>
                    {/* Main displayed Images  */}
                    <div className="flex w-full justify-between">
                        {currentImages.map((img,index) => {
                            return(
                                <img className="lg:w-[48.9973%] w-full laptop:h-[583px] sm:h-[507px] h-[250px] object-cover rounded-[10px]" key={index} src={img.image}/>
                            )
                        })}
                    </div>
                </div>
                {/* Slider controls */}
                <div className="flex justify-between items-center gap-[10px] bg-Grey-08 sm:mx-auto p-[10px] rounded-full">
                    <button onClick={prev} className={`w-11 h-11 md:w-14.5 md:h-14.5 md:p-3.5 p-2.5 border border-Grey-15
                    rounded-full flex  justify-center items-center cursor-pointer
                    ${currentIndex === 0 ? 'bg-Grey-08 text-Grey-50': 'bg-Grey-10 '}`}>
                        <Previous/>
                    </button>
        
                    <div className="flex gap-1">
                        {Array.from({ length: 6 }).map((_, i) => {
                            const lastDot = i === 5;
                            const active = (currentIndex === i * imagesPerSlide) || (lastDot && currentIndex >= 5 * imagesPerSlide)
                            return(
                                <span
                                    key={i}
                                    className={`w-[11.7px] h-[3px] md:w-[20px] md:h-[5px] rounded ${
                                    active
                                        ? 'bg-Purple-60'
                                        : 'bg-Grey-30'
                                    }`}
                                ></span>
                        )})}
                    </div>
                    
                    <button onClick={next} 
                        className={`w-11 h-11 md:w-14.5 md:h-14.5 md:p-3.5 p-2.5 border border-Grey-15
                        rounded-full flex  justify-center items-center cursor-pointer
                        ${currentIndex + imagesPerSlide >= images.length ? 'bg-Grey-08 text-Grey-50': 'bg-Grey-10 '}`}>
                        <Next/>
                    </button>
                </div>
                
            </div>
    )
}

export default PropertyDetailsSlider
