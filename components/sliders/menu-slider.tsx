"use client";

import { memo, useState } from "react";
import { AnimatePresence, motion, Variants } from "motion/react";

import { Menu, X } from "lucide-react";

import { useLockScroll } from "@/hooks/use-lock-scroll";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const parentVariants: Variants = {
   open: {
      x: "0%",
      transition: {
         type: "spring",
         stiffness: 80,
         damping: 15,
         staggerChildren: 0.15,
         delayChildren: 0.1,
      },
   },
   closed: {
      x: "-100%",
      transition: {
         type: "spring",
         stiffness: 90,
         damping: 18,
         staggerChildren: 0.08,
         staggerDirection: -1,
      },
   },
};

const innerLayerVariants: Variants = {
   open: {
      x: "0%",
      transition: { type: "spring", stiffness: 120, damping: 16, mass: 0.6 },
   },
   closed: { x: "-100%" },
};

const contentVariants: Variants = {
   open: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.35, ease: "easeOut" },
   },
   closed: { y: 10, opacity: 0 },
};

const MenuSlider = memo(function MenuSlider() {
   const [isOpen, setIsOpen] = useState(false);

   useLockScroll(isOpen);

   return (
      <>
         <Button
            size={"icon-lg"}
            variant={"ghost"}
            className={"max-sm:size-7"}
            onClick={() => setIsOpen(true)}
         >
            <Menu className={"sm:size-6"} />
         </Button>

         <AnimatePresence>
            {isOpen && (
               <>
                  <motion.div
                     initial={{ opacity: 0 }}
                     animate={{ opacity: 1 }}
                     exit={{ opacity: 0 }}
                     transition={{ duration: 0.3, ease: "easeInOut", delay: 0.1 }}
                     className="fixed inset-0 z-30 h-screen w-full bg-black/20"
                     onClick={() => setIsOpen(false)}
                  />
                  <motion.div
                     initial="closed"
                     animate="open"
                     exit="closed"
                     variants={parentVariants}
                     className="text-popover-foreground bg-muted fixed top-0 left-0 z-50 h-screen w-full max-w-lg"
                  >
                     <motion.div
                        variants={innerLayerVariants}
                        className="bg-popover absolute inset-0 h-screen w-full max-w-lg"
                     />
                     <motion.div
                        variants={contentVariants}
                        className="relative z-10 p-6"
                     >
                        <div className="flex items-center justify-between">
                           <h2 className="text-4xl font-bold tracking-[0.2em] uppercase">
                              Olivra
                           </h2>
                           <Button
                              size={"icon-lg"}
                              variant={"ghost"}
                              className={"max-sm:size-7"}
                              onClick={() => setIsOpen(false)}
                           >
                              <X className={"sm:size-6"} />
                           </Button>
                        </div>
                        <div className="mt-4 flex flex-wrap items-center gap-4 sm:flex-nowrap">
                           {["women", "men", "fragrances", "the edit"].map(
                              (option, i) => (
                                 <span
                                    key={option}
                                    className={cn(
                                       "cursor-pointer uppercase underline-offset-2 hover:font-semibold hover:underline",
                                       {
                                          "font-semibold underline": i == 0,
                                       },
                                    )}
                                 >
                                    {option}
                                 </span>
                              ),
                           )}
                        </div>
                        <nav className="mt-10 flex flex-col gap-6">
                           {[
                              "new in",
                              "ready to wear",
                              "unstitched",
                              "west",
                              "modest wear",
                              "accessories",
                              "view all",
                              "speacial offers",
                           ].map((item, i) => (
                              <span
                                 key={item}
                                 className={cn(
                                    "cursor-pointer uppercase hover:font-semibold",
                                    {
                                       "text-destructive font-semibold underline-offset-2 hover:underline":
                                          i == 7,
                                    },
                                 )}
                              >
                                 {item}
                              </span>
                           ))}
                        </nav>
                     </motion.div>
                  </motion.div>
               </>
            )}
         </AnimatePresence>
      </>
   );
});

export default MenuSlider;
