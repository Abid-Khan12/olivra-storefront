import { UserRound, X } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
   Sheet,
   SheetClose,
   SheetContent,
   SheetFooter,
   SheetHeader,
   SheetTitle,
   SheetTrigger,
} from "@/components/ui/sheet";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { memo } from "react";

const AccountSlider = memo(function AccountSlider() {
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
            <UserRound className="size-5 sm:size-6" />
         </SheetTrigger>
         <SheetContent showCloseButton={false}>
            <SheetHeader className="border-input flex-row items-center justify-between gap-2 border-b pt-7">
               <SheetTitle className={"text-lg uppercase"}>Account</SheetTitle>
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
            <div className="mt-2 flex-1 px-6">
               <form className="flex flex-col gap-5">
                  <div className="">
                     <Input
                        className="h-10"
                        placeholder="Email*"
                     />
                  </div>
                  <div className="">
                     <Input
                        className="h-10"
                        placeholder="Password*"
                     />
                  </div>

                  <span className="cursor-pointer text-xs tracking-wide text-black uppercase">
                     forgot password?
                  </span>

                  <Button
                     type="button"
                     size={"lg"}
                     className={"min-h-10"}
                  >
                     Sign In
                  </Button>

                  <span className="text-xs tracking-wide text-black uppercase">
                     New to Sapphire?
                  </span>

                  <Button
                     type="button"
                     size={"lg"}
                     className={"min-h-10"}
                  >
                     Create Account
                  </Button>
               </form>
            </div>

            <SheetFooter className="px-6">
               <div className="mx-auto flex w-full flex-col gap-6">
                  <div className="relative">
                     <Separator />
                     <span className="bg-popover absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 px-2 text-xs font-semibold tracking-wide text-black uppercase sm:text-sm">
                        Or sign <br className="sm:hidden" /> in with
                     </span>
                  </div>
               </div>
               <div className="mt-4 flex items-center justify-center gap-4">
                  {Array.from({ length: 2 }).map((_, i) => (
                     <Button
                        key={i}
                        size={"icon-lg"}
                        className={"bg-gray-100"}
                     ></Button>
                  ))}
               </div>
            </SheetFooter>
         </SheetContent>
      </Sheet>
   );
});

export default AccountSlider;
