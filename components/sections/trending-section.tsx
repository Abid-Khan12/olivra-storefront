import Image from "next/image";

import {
   TrendingImage1,
   TrendingImage2,
   TrendingImage3,
   TrendingImage4,
   TrendingImage5,
   TrendingImage6,
} from "@/public";

import {
   Carousel,
   CarouselContent,
   CarouselItem,
   CarouselNext,
   CarouselPrevious,
} from "@/components/ui/carousel";
import { Heart } from "lucide-react";

const sliderData = [
   {
      image: TrendingImage1,
      title: "Premium Cotton Jacquard Kurta",
      subTitle: "Men’s Stitched Summer ‘26 - New Arrivals",
      price: "Rs.4,990",
      sizes: ["XS", "S", "M", "L", "XL"],
   },
   {
      image: TrendingImage2,
      title: "Premium Cotton Jacquard Kurta",
      subTitle: "Men’s Stitched Summer ‘26 - New Arrivals",
      price: "Rs.4,990",
      sizes: ["XS", "S", "M", "L", "XL"],
   },
   {
      image: TrendingImage3,
      title: "2 Piece - Embroidered Lawn Suit",
      subTitle: "Ready To Wear Intermix '26",
      price: "Rs.14,990",
      isNew: true,
      sizes: ["XS", "S", "M", "L", "XL"],
   },
   {
      image: TrendingImage4,
      title: "2 Piece - Embroidered Lawn Suit",
      subTitle: "Ready To Wear Intermix '26",
      price: "Rs.4,990",
      isNew: true,
      sizes: ["XS", "S", "M", "L", "XL"],
   },
   {
      image: TrendingImage5,
      title: "CARAMEL CANDY",
      subTitle: "Women's Perfume",
      price: "Rs.3,990",
   },
   {
      image: TrendingImage6,
      title: "VANILLA RUSH",
      subTitle: "Women's Perfume",
      price: "Rs.3,990",
   },
];

function TrendingSection() {
   return (
      <section>
         <div className="px-2 sm:px-6">
            <h2 className="text-4xl font-medium tracking-wider">TRENDING</h2>
            <p className="mt-3 text-sm tracking-wide text-[#565656] uppercase">
               Discover the best-selling styles
            </p>
         </div>
         <div className="mt-6 overflow-hidden">
            <Carousel
               opts={{
                  loop: true,
               }}
            >
               <CarouselContent>
                  {sliderData.map((item, i) => (
                     <CarouselItem
                        key={item.title + i}
                        className="basis-full sm:basis-1/3 xl:basis-1/4"
                     >
                        <div className="group flex w-full flex-col gap-2">
                           <div className="relative h-120 w-full overflow-hidden">
                              <Image
                                 src={item.image}
                                 alt={item.title}
                                 priority={i <= 2}
                                 fill
                                 sizes="(min-width: 1280px) 25vw, (min-width: 768px) 33vw, 50vw"
                                 className="object-cover object-center transition-transform duration-500 ease-out group-hover:scale-105"
                              />
                              {/* Hover reveal: sizes + add to bag */}
                              <div className="bg-background/95 absolute inset-x-0 bottom-0 z-20 translate-y-full transition-transform duration-300 ease-out group-hover:translate-y-0">
                                 {item.sizes && (
                                    <div className="flex items-center justify-center gap-3 py-3">
                                       {item.sizes.map((size) => (
                                          <button
                                             key={size}
                                             type="button"
                                             className="text-muted-foreground hover:text-foreground focus-visible:ring-ring text-xs font-medium transition-colors focus-visible:ring-2 focus-visible:outline-none"
                                          >
                                             {size}
                                          </button>
                                       ))}
                                    </div>
                                 )}
                                 <div className="flex items-center border-t">
                                    <button
                                       type="button"
                                       className="hover:bg-muted focus-visible:ring-ring flex-1 py-3 text-xs font-semibold tracking-wide uppercase focus-visible:ring-2 focus-visible:outline-none focus-visible:ring-inset"
                                    >
                                       Add to bag
                                    </button>
                                    <button
                                       type="button"
                                       aria-label="Add to wishlist"
                                       className="hover:bg-muted focus-visible:ring-ring px-4 py-3 focus-visible:ring-2 focus-visible:outline-none"
                                    >
                                       <Heart className="size-4" />
                                    </button>
                                 </div>
                              </div>
                              <div className="absolute inset-0 bg-black/20 opacity-0 transition-opacity duration-200 group-hover:opacity-100" />
                           </div>

                           <h4 className="text-sm font-medium uppercase">{item.title}</h4>
                           <p className="text-muted-foreground text-xs uppercase">
                              {item.subTitle}
                           </p>
                           <span className="text-xs font-semibold">
                              Rs.{item.price.toLocaleString()}
                           </span>
                           {item.isNew && (
                              <span className="text-muted-foreground w-fit border px-2 py-0.5 text-[10px] font-medium tracking-wide uppercase">
                                 New in
                              </span>
                           )}
                        </div>
                     </CarouselItem>
                  ))}
               </CarouselContent>
               <CarouselPrevious
                  variant={"ghost"}
                  size={"lg"}
                  className="text-primary-foreground hover:bg-background/80 left-2 z-20 size-10 rounded-full [&>svg]:size-7!"
               />
               <CarouselNext
                  variant={"ghost"}
                  size={"lg"}
                  className="text-primary-foreground hover:bg-background/80 right-2 z-20 size-10 rounded-full [&>svg]:size-7!"
               />
            </Carousel>
         </div>
      </section>
   );
}

export default TrendingSection;
