import { StickyImage1, StickyImage2, StickyImage3 } from "@/public";
import StickyCarousel, { type StickySlide } from "@/components/sticky-carousel";

const sliderData: StickySlide[] = [
   {
      image: StickyImage3,
      title: "Ready to wear",
      subTitle:
         "Experience the quintessence of enduring artistry and elegance crafted to perfection.",
      categories: ["shirts", "bottoms", "dupattas"],
   },
   {
      image: StickyImage1,
      title: "Men's kurta",
      subTitle:
         "Structured cuts and breathable weaves, tailored for everyday ease and quiet distinction.",
      categories: ["kurtas", "shalwars", "waistcoats"],
   },
   {
      image: StickyImage2,
      title: "Signature scents",
      subTitle:
         "Layered notes built to linger — a fragrance for every hour, poured into every bottle.",
      categories: ["eau de parfum", "attars", "mists"],
   },
];

function StickySection() {
   return (
      <section className="w-full">
         <StickyCarousel slides={sliderData} />
      </section>
   );
}

export default StickySection;
