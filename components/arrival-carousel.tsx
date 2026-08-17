// "use client";

// import Autoplay from "embla-carousel-autoplay";
// import Image from "next/image";

// import {
//    SliderImage1,
//    SliderImage2,
//    SliderImage3,
//    SliderImage4,
//    SliderImage5,
// } from "@/public";

// import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";

// const sliderData = [
//    {
//       image: SliderImage1,
//       title: "outfits",
//    },
//    {
//       image: SliderImage2,
//       title: "kurtas",
//    },
//    {
//       image: SliderImage3,
//       title: "modest wear abayas",
//    },
//    {
//       image: SliderImage4,
//       title: "matching separates",
//    },
//    {
//       image: SliderImage5,
//       title: "find you scent",
//    },
// ];

// function ArrivalCarousel() {
//    return (
//       <Carousel
//          opts={{
//             loop: true,
//          }}
//          plugins={[
//             Autoplay({
//                delay: 5000,
//             }),
//          ]}
//       >
//          <CarouselContent>
//             {sliderData.map((item, i) => (
//                <CarouselItem
//                   key={item.title}
//                   className="flex basis-1/2 flex-col items-center gap-3 pl-1 md:basis-1/3"
//                >
//                   <Image
//                      src={item.image}
//                      alt={item.title}
//                      preload={i <= 3}
//                      className="w-full object-center"
//                   />
//                   <h3 className="font-semibold uppercase">{item.title}</h3>
//                </CarouselItem>
//             ))}
//          </CarouselContent>
//       </Carousel>
//    );
// }

// export default ArrivalCarousel;
"use client";

import * as React from "react";
import Autoplay from "embla-carousel-autoplay";
import Image, { StaticImageData } from "next/image";

import {
   SliderImage1,
   SliderImage2,
   SliderImage3,
   SliderImage4,
   SliderImage5,
} from "@/public";

import {
   Carousel,
   CarouselContent,
   CarouselItem,
   type CarouselApi,
} from "@/components/ui/carousel";
import { cn } from "@/lib/utils";

interface SlideData {
   image: StaticImageData;
   title: string;
}

const sliderData: SlideData[] = [
   { image: SliderImage2, title: "kurtas" },
   { image: SliderImage3, title: "modest wear abayas" },
   { image: SliderImage4, title: "matching separates" },
   { image: SliderImage5, title: "find you scent" },
   { image: SliderImage1, title: "outfits" },
];

function ArrivalCarousel() {
   const [api, setApi] = React.useState<CarouselApi>();
   const [current, setCurrent] = React.useState<number>(0);
   const [count, setCount] = React.useState<number>(0);

   React.useEffect(() => {
      if (!api) return;

      // eslint-disable-next-line react-hooks/set-state-in-effect
      setCount(api.scrollSnapList().length);
      setCurrent(api.selectedScrollSnap());

      const onSelect = () => setCurrent(api.selectedScrollSnap());

      api.on("select", onSelect);
      return () => {
         api.off("select", onSelect);
      };
   }, [api]);

   return (
      <div className="w-full">
         <Carousel
            setApi={setApi}
            opts={{
               loop: true,
            }}
            plugins={[
               Autoplay({
                  delay: 5000,
               }),
            ]}
         >
            <CarouselContent className="-ml-1">
               {sliderData.map((item, i) => (
                  <CarouselItem
                     key={item.title}
                     className="flex flex-col items-center gap-3 pl-1 min-[426px]:basis-1/2 md:basis-1/3"
                  >
                     <Image
                        src={item.image}
                        alt={item.title}
                        priority={i <= 3}
                        className="w-full object-cover object-center"
                     />
                     <h3 className="text-xs font-semibold uppercase sm:text-base">
                        {item.title}
                     </h3>
                  </CarouselItem>
               ))}
            </CarouselContent>
         </Carousel>

         <div className="mt-4 flex items-center justify-center gap-2">
            {Array.from({ length: count }).map((_, index) => (
               <button
                  key={index}
                  type="button"
                  onClick={() => api?.scrollTo(index)}
                  aria-label={`Go to slide ${index + 1}`}
                  className={cn(
                     "h-1 rounded-full transition-all duration-300",
                     current === index
                        ? "w-8 bg-black"
                        : "w-4 bg-black/30 hover:bg-black/50",
                  )}
               />
            ))}
         </div>
      </div>
   );
}

export default ArrivalCarousel;
