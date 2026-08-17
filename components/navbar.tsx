"use client";

import Link from "next/link";

import { cn } from "@/lib/utils";

import useScrollDirection from "@/hooks/use-scroll-direction";

import SearchSlider from "@/components/sliders/search-slider";
import AccountSlider from "@/components/sliders/account-slider";
import CartSlider from "@/components/sliders/cart-slider";
import MenuSlider from "@/components/sliders/menu-slider";
import { useScroll } from "@/hooks/use-scroll";

function Navbar() {
   const { up, down } = useScrollDirection(50);
   const isScrolled = useScroll(50);

   return (
      <header
         className={cn(
            "fixed inset-x-0 top-0 z-50 px-2 transition-[background-color,transform] duration-200 sm:px-4",
            isScrolled ? "bg-muted/95" : "bg-transparent",
            {
               "-translate-y-full": down,
               "translate-y-0": up,
            },
         )}
      >
         <nav className="mx-auto flex max-w-7xl items-center justify-between py-2">
            <div className="flex items-center gap-2 sm:gap-4">
               <MenuSlider />
               <Link
                  href={"#"}
                  className="text-2xl font-bold tracking-widest uppercase min-[375px]:text-3xl sm:text-4xl sm:tracking-[0.2em]"
               >
                  Olivra
               </Link>
            </div>
            <div className="flex items-center gap-3 sm:gap-5">
               <SearchSlider />
               <AccountSlider />
               <CartSlider />
            </div>
         </nav>
      </header>
   );
}

export default Navbar;
