"use client";

import { useState, useEffect, useRef } from "react";

function useScrollDirection(downThreshold: number) {
   const [scrollDirection, setScrollDirection] = useState({ up: false, down: false });
   const lastScrollY = useRef(0);
   const scrollUpThreshold = downThreshold / 2;

   useEffect(() => {
      lastScrollY.current = window.scrollY;

      const updateScrollDirection = () => {
         const currentScrollY = window.scrollY;

         if (currentScrollY > lastScrollY.current) {
            setScrollDirection({
               up: false,
               down: currentScrollY > scrollUpThreshold ? true : false,
            });
         } else if (currentScrollY < lastScrollY.current) {
            setScrollDirection({ up: true, down: false });
         }

         lastScrollY.current = currentScrollY > 0 ? currentScrollY : 0;
      };

      window.addEventListener("scroll", updateScrollDirection, { passive: true });

      return () => window.removeEventListener("scroll", updateScrollDirection);
   }, [scrollUpThreshold]);

   return scrollDirection;
}

export default useScrollDirection;
