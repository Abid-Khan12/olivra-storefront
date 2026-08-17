import ArrivalCarousel from "@/components/arrival-carousel";

function NewArrivalSection() {
   return (
      <section className="grid w-full grid-cols-1 gap-5 px-3 sm:px-6 lg:grid-cols-3">
         <div className="my-auto space-y-4">
            <p className="text-base text-[#565656] uppercase">40+ items</p>
            <h2 className="text-5xl font-medium">NEW IN</h2>
            <p className="mt-1 max-w-100 text-base leading-7 text-[#565656]">
               Upgrade your wardrobe with our latest arrivals. Discover dapper looks for
               the new season.
            </p>
            <p className="inline-block cursor-pointer text-base text-black uppercase underline underline-offset-2">
               Shop now
            </p>
         </div>
         <div className="overflow-hidden lg:col-span-2">
            <ArrivalCarousel />
         </div>
      </section>
   );
}

export default NewArrivalSection;
