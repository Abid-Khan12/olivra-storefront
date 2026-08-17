"use client";

import * as React from "react";
import Image, { type StaticImageData } from "next/image";
import {
   AnimatePresence,
   motion,
   useMotionValueEvent,
   useReducedMotion,
   useScroll,
   useTransform,
} from "motion/react";

import { cn } from "@/lib/utils";

export interface StickySlide {
   image: StaticImageData;
   title: string;
   subTitle: string;
   categories: string[];
}

interface StickyCarouselProps {
   slides: StickySlide[];
}

function StickyCarousel({ slides }: StickyCarouselProps) {
   const containerRef = React.useRef<HTMLDivElement>(null);
   const [active, setActive] = React.useState(0);
   const prefersReducedMotion = useReducedMotion();

   const { scrollYProgress } = useScroll({
      target: containerRef,
      offset: ["start start", "end end"],
   });

   const rawIndex = useTransform(scrollYProgress, [0, 1], [0, slides.length - 1]);

   useMotionValueEvent(rawIndex, "change", (latest) => {
      const next = Math.min(slides.length - 1, Math.max(0, Math.round(latest)));
      setActive((current) => (current === next ? current : next));
   });

   const goToSlide = (index: number) => {
      const container = containerRef.current;
      if (!container) return;

      const progress = index / (slides.length - 1);
      const scrollableHeight = container.offsetHeight - window.innerHeight;
      const target = container.offsetTop + progress * scrollableHeight;

      window.scrollTo({
         top: target,
         behavior: prefersReducedMotion ? "auto" : "smooth",
      });
   };

   const slide = slides[active];
   const fadeDuration = prefersReducedMotion ? 0 : 0.6;

   return (
      <div
         ref={containerRef}
         style={{ height: `${slides.length * 100}svh` }}
         className="relative w-full"
      >
         <div className="sticky top-0 flex h-svh w-full flex-col overflow-hidden md:flex-row">
            {/* Image */}
            <div className="relative h-1/2 w-full md:h-full md:w-2/3">
               <AnimatePresence initial={false}>
                  <motion.div
                     key={active}
                     initial={{ opacity: 0, scale: prefersReducedMotion ? 1 : 1.04 }}
                     animate={{ opacity: 1, scale: 1 }}
                     exit={{ opacity: 0 }}
                     transition={{ duration: fadeDuration, ease: "easeInOut" }}
                     className="absolute inset-0"
                  >
                     <Image
                        src={slide!.image}
                        alt={slide!.title}
                        fill
                        priority={active === 0}
                        sizes="(min-width: 768px) 66vw, 100vw"
                        className="object-cover"
                     />
                  </motion.div>
               </AnimatePresence>

               {/* Readability gradient for mobile overlay text */}
               <div className="absolute inset-x-0 bottom-0 h-1/2 bg-linear-to-t from-black/60 to-transparent md:hidden" />
            </div>

            {/* Content */}
            <div className="bg-background relative flex h-1/2 w-full items-center px-8 md:h-full md:w-1/3 xl:px-16">
               <AnimatePresence mode="wait">
                  <motion.div
                     key={active}
                     initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 16 }}
                     animate={{ opacity: 1, y: 0 }}
                     exit={{ opacity: 0, y: prefersReducedMotion ? 0 : -16 }}
                     transition={{
                        duration: prefersReducedMotion ? 0 : 0.4,
                        ease: "easeInOut",
                     }}
                     className="max-w-md"
                  >
                     <h2 className="text-3xl font-medium tracking-tight uppercase md:text-2xl xl:text-3xl">
                        {slide!.title}
                     </h2>
                     <p className="text-muted-foreground mt-5 text-sm leading-relaxed md:text-sm xl:text-base">
                        {slide!.subTitle}
                     </p>
                     <div className="mt-7 flex flex-wrap gap-x-6 gap-y-3">
                        {slide!.categories.map((category) => (
                           <a
                              key={category}
                              href="#"
                              className="focus-visible:ring-ring text-xs font-medium tracking-wide uppercase underline underline-offset-4 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none md:text-sm"
                           >
                              {category}
                           </a>
                        ))}
                     </div>
                  </motion.div>
               </AnimatePresence>

               {/* Line navigation */}
               <div className="absolute top-1/2 right-4 flex -translate-y-1/2 flex-col items-center gap-3 md:right-4">
                  {slides.map((_, index) => (
                     <button
                        key={index}
                        type="button"
                        aria-label={`Go to slide ${index + 1}`}
                        aria-current={active === index}
                        onClick={() => goToSlide(index)}
                        className="focus-visible:ring-ring rounded-full p-1 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none"
                     >
                        <span
                           className={cn(
                              "block w-0.75 rounded-full transition-all duration-300",
                              active === index
                                 ? "bg-foreground h-8"
                                 : "bg-foreground/30 h-2",
                           )}
                        />
                     </button>
                  ))}
               </div>
            </div>
         </div>
      </div>
   );
}

export default StickyCarousel;
