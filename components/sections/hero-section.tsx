import Image from "next/image";

import { HeroImage1, HeroImage2, HeroImage3 } from "@/public";

import {
   Carousel,
   CarouselContent,
   CarouselItem,
   CarouselNext,
   CarouselPrevious,
} from "@/components/ui/carousel";

const sliderData = [
   { image: HeroImage1, title: "intermix '26", subTitle: "ready to wear" },
   { image: HeroImage2, title: "summer '26", subTitle: "new arrivals" },
   { image: HeroImage3, title: "by the beach", subTitle: "signature mists" },
];

function HeroSection() {
   return (
      <section className="relative w-full overflow-hidden">
         <Carousel
            className="w-full"
            opts={{
               loop: true,
            }}
         >
            <CarouselContent className="ml-0">
               {sliderData.map((slide, index) => (
                  <CarouselItem
                     key={index}
                     className="relative h-screen w-full pl-0"
                  >
                     <Image
                        src={slide.image}
                        alt={slide.title}
                        fill
                        priority={index === 0}
                        sizes="100vw"
                        className="object-cover"
                     />

                     <div className="absolute inset-x-0 bottom-12 z-10 flex flex-col items-center gap-1 text-center text-white">
                        <h2 className="text-3xl font-semibold tracking-wide uppercase text-shadow-sm md:text-3xl">
                           {slide.title}
                           <br />
                           {slide.subTitle}
                        </h2>
                     </div>
                  </CarouselItem>
               ))}
            </CarouselContent>

            <CarouselPrevious
               variant={"ghost"}
               size={"lg"}
               className="left-4 z-20 size-12 rounded-full [&>svg]:size-6! text-white"
            />
            <CarouselNext
               variant={"ghost"}
               size={"lg"}
               className="right-4 z-20 size-12 rounded-full [&>svg]:size-6! text-white"
            />
         </Carousel>
      </section>
   );
}

export default HeroSection;
