import {
   Sheet,
   SheetClose,
   SheetContent,
   SheetHeader,
   SheetTrigger,
} from "@/components/ui/sheet";
import { Search, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { memo } from "react";
import {
   SearchImage1,
   SearchImage2,
   SearchImage3,
   SearchImage4,
   SearchImage5,
   SearchImage6,
} from "@/public";
import Image from "next/image";

const suggestions = ["Andaaz", "Intermix '26", "Linen", "TOPS | SHIRTS", "Modest Wear"];

const suggestionData = [
   {
      image: SearchImage1,
      title: "3 Piece - Embroidered Lawn Suit",
      price: "Rs.6,590",
   },
   {
      image: SearchImage2,
      title: "3 Piece - Embroidered Lawn Suit",
      price: "Rs.6,590",
   },
   {
      image: SearchImage3,
      title: "3 Piece - Embroidered Lawn Suit",
      price: "Rs.6,590",
   },
   {
      image: SearchImage4,
      title: "3 Piece - Embroidered Lawn Suit",
      price: "Rs.6,590",
   },
   {
      image: SearchImage5,
      title: "3 Piece - Embroidered Lawn Suit",
      price: "Rs.6,590",
   },
   {
      image: SearchImage6,
      title: "3 Piece - Embroidered Lawn Suit",
      price: "Rs.6,590",
   },
];

const SearchSlider = memo(function SearchSlider() {
   return (
      <Sheet>
         <SheetTrigger
            render={
               <Button
                  size={"icon-lg"}
                  variant={"ghost"}
               />
            }
         >
            <Search className="size-5 sm:size-6" />
         </SheetTrigger>
         <SheetContent
            className={"overflow-y-auto pb-4"}
            showCloseButton={false}
         >
            <SheetHeader className="flex-row items-center justify-between gap-2 pt-7">
               <div className="border-input flex flex-1 items-center gap-2 rounded-lg border px-2 sm:px-4">
                  <Input
                     className="border-0 px-0 ring-0!"
                     placeholder="Find Your Favourites"
                  />
                  <Search className="size-5" />
               </div>
               <SheetClose
                  render={
                     <Button
                        size={"icon-lg"}
                        variant={"ghost"}
                        className={"min-h-full"}
                     />
                  }
               >
                  <X className="size-5" />
               </SheetClose>
            </SheetHeader>
            <div className="flex-1 space-y-6 px-4">
               <div>
                  <h4 className="font-semibold uppercase">Suggestions For You:</h4>
                  <div className="mt-4 flex flex-col gap-3">
                     {suggestions.map((option) => (
                        <span
                           key={option}
                           className="w-fit cursor-pointer text-sm font-medium"
                        >
                           {option}
                        </span>
                     ))}
                  </div>
               </div>
               <div>
                  <h4 className="font-semibold uppercase">Need some inspiration?</h4>
                  <div className="mt-4 grid grid-cols-2 gap-3">
                     {suggestionData.map((item, i) => (
                        <div
                           key={item.title + i}
                           className="flex flex-col gap-2"
                        >
                           <Image
                              src={item.image}
                              alt={item.title}
                              className="aspect-square object-cover object-top"
                           />
                           <span className="text-sm">{item.title}</span>
                           <span className="text-xs font-medium tracking-wide">
                              {item.price}
                           </span>
                        </div>
                     ))}
                  </div>
               </div>
            </div>
         </SheetContent>
      </Sheet>
   );
});

export default SearchSlider;
