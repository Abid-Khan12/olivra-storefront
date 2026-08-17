import {
   GalleryImage1,
   GalleryImage2,
   GalleryImage3,
   GalleryImage4,
   GalleryImage5,
   StickyImage1,
} from "@/public";
import Image from "next/image";

const galleryData = [
   {
      image: GalleryImage1,
      title: "PLAIN",
   },
   {
      image: StickyImage1,
      title: "EMBROIDERED",
   },
   {
      image: GalleryImage4,
      title: "3 PIECE AFFAIR",
   },
   {
      image: GalleryImage5,
      title: "REGAL REDS",
   },
   {
      image: GalleryImage2,
      title: "FRUITY",
   },
   {
      image: GalleryImage3,
      title: "WOODY",
   },
];

function GallerySection() {
   return (
      <section className="flex flex-wrap items-center gap-y-2">
         {galleryData.map((item) => (
            <div
               key={item.title}
               className="relative h-svh w-full object-center md:w-1/2"
            >
               <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="100%"
                  className="object-cover object-center"
               />
               <div className="text-primary-foreground absolute bottom-16 left-1/2 z-10 w-full -translate-x-1/2 text-center">
                  <h4 className="text-2xl font-semibold tracking-wider">{item.title}</h4>
               </div>
            </div>
         ))}
      </section>
   );
}

export default GallerySection;
