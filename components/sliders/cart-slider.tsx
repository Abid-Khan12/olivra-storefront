import { memo, useState } from "react";

import { Handbag, Minus, Plus, ShoppingCart, Trash, X } from "lucide-react";

import { cn } from "@/lib/utils";

import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
   Sheet,
   SheetClose,
   SheetContent,
   SheetFooter,
   SheetHeader,
   SheetTitle,
   SheetTrigger,
} from "@/components/ui/sheet";

const CartSlider = memo(function CartSlider() {
   return (
      <Sheet>
         <SheetTrigger
            render={
               <Button
                  className={"relative"}
                  size={"icon-lg"}
                  variant={"ghost"}
               />
            }
         >
            <Handbag className="size-5 sm:size-6" />
            <span className="bg-primary text-primary-foreground absolute top-0.5 -right-1.5 size-4 content-center rounded-full text-center text-[10px]">
               0
            </span>
         </SheetTrigger>
         <SheetContent
            showCloseButton={false}
            className={"overflow-y-auto"}
         >
            <SheetHeader className="border-input flex-row items-center justify-between gap-2 border-b pt-7">
               <SheetTitle className={"text-lg uppercase"}>Shopping bag</SheetTitle>
               <SheetClose
                  render={
                     <Button
                        size={"icon-lg"}
                        variant={"ghost"}
                     />
                  }
               >
                  <X className="size-5" />
               </SheetClose>
            </SheetHeader>
            <div className="mt-2 flex-1 px-4">
               {/* For Empty State */}
               {/* <div className="flex flex-col items-center gap-2">
                  <div className="relative">
                     <ShoppingCart className="size-18" />
                     <X className="absolute top-1/2 left-1/2 size-6 -translate-x-1/3 -translate-y-[calc(50%--1px)]" />
                  </div>
                  <span className="text-xs font-medium text-black">
                     Your Bag is Empty
                  </span>
                  <Button
                     size={"lg"}
                     className={"text-[10px] font-bold tracking-wide uppercase"}
                  >
                     Continue shopping
                  </Button>
               </div> */}
               <div className="flex flex-col gap-5">
                  {Array.from({ length: 2 }).map((_, i) => (
                     <div
                        key={i}
                        className="flex flex-col items-start gap-3 sm:flex-row"
                     >
                        <div className="aspect-square h-36 w-full bg-gray-100 sm:size-36" />
                        <div className="flex flex-col">
                           <p className="text-sm font-semibold uppercase">
                              Premium Cotton Suit
                           </p>
                           <span className="text-muted-foreground mt-1 text-xs font-medium">
                              Rs.3,990
                           </span>
                           <span className="mt-2 text-[11px] text-[#2fcf64]">
                              In Stock
                           </span>
                           <div className="mt-3 flex items-center gap-5 sm:flex-col sm:items-start sm:gap-0">
                              <CartCounter />
                              <Button
                                 size={"icon-sm"}
                                 variant={"destructive"}
                                 className={"rounded-full sm:mt-4"}
                              >
                                 <Trash />
                              </Button>
                           </div>
                        </div>
                     </div>
                  ))}
               </div>
            </div>

            <SheetFooter>
               <div className="flex flex-col gap-3">
                  <div className="flex items-center justify-between">
                     <h3 className="text-lg font-medium uppercase">Subtotal:</h3>
                     <span className="text-base font-medium">Rs.7,980</span>
                  </div>
                  <Separator />
                  <div className="mt-2 grid grid-cols-2 gap-3">
                     <Button
                        size={"lg"}
                        className={"w-full text-xs tracking-wide uppercase"}
                     >
                        veiw bag
                     </Button>
                     <Button
                        size={"lg"}
                        className={"w-full text-xs tracking-wide uppercase"}
                     >
                        checkout
                     </Button>
                     <Button
                        className={"col-span-2 w-full text-xs tracking-wide uppercase"}
                        size={"lg"}
                     >
                        continue shopping
                     </Button>
                  </div>
               </div>
            </SheetFooter>
         </SheetContent>
      </Sheet>
   );
});

export default CartSlider;

function CartCounter({ className }: { className?: string }) {
   const [count, setCount] = useState(1);

   return (
      <div className={cn("flex items-center gap-3", className)}>
         <Button
            className={"rounded-full"}
            size={"icon-xs"}
            disabled={count == 1 ? true : false}
            onClick={() => setCount((prev) => prev - 1)}
         >
            <Minus />
         </Button>
         <span className="text-sm font-bold tabular-nums">{count}</span>
         <Button
            className={"rounded-full"}
            size={"icon-xs"}
            disabled={count == 5 ? true : false}
            onClick={() => setCount((prev) => prev + 1)}
         >
            <Plus />
         </Button>
      </div>
   );
}
