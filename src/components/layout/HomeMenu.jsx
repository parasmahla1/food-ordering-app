"use client";
import Image from "next/image";
import SectionHeaders from "./SectionHeaders";
import { useState, useEffect } from "react";
import MenuItem from "../menu/MenuItem";
export default function HomeMenu() {
  // const [bestSellers, setBestSellers] = useState([]);
  // useEffect(() => {
  //   fetch("/api/menu-items").then((res) => {
  //     res.json().then((menuItems) => {
  //       setBestSellers(menuItems.slice(-3));
  //     });
  //   });
  // }, []);
  return (
    <section>
      <div className="absolute left-0 right-0 w-full justify-start">
        <div className="absolute left-0 -top-[70px] text-left -z-10">
          <Image
            src="/sallad1.png"
            alt="sallad"
            width={109}
            height={189}
          />
        </div>
        <div className="absolute -top-[100px] right-0 -z-10">
          <Image
            src= "/sallad2.png"
            width={107}
            height={195}
            alt= "sallad"
          />
        </div>
      </div>

      <div className="text-center mb-4">
        <SectionHeaders
          subHeader={"check out"}
          mainHeader={"Our Best Sellers"}
        />
      </div>
      <div className="grid grid-cols-3 gap-4">
        <MenuItem />
        <MenuItem />
        <MenuItem />
        <MenuItem />
        <MenuItem />
        <MenuItem />
      </div>
    </section>
  );
}
