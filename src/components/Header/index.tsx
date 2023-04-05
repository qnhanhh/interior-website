import Image from "next/image";
import { Jost } from "next/font/google";
import logo from "@/assets/logo.svg";
import search from "@/assets/search.svg";

const jost = Jost({
  weight: "400",
  subsets: ["latin"],
});

export default function Header() {
  return (
    <div className="flex items-center justify-between mb-[5.7rem] pt-[4.4rem] w-full">
      <div className="flex gap-[1rem]">
        <Image src={logo} alt="logoImage" />
        <p className="text-[4rem]">Interno</p>
      </div>
      <div className="flex gap-[3rem] pt-3">
        <div className={`medium-para ${jost.className}`}>Home</div>
        <div className={`medium-para ${jost.className}`}>Pages</div>
        <div className={`medium-para ${jost.className}`}>Services</div>
        <div className={`medium-para ${jost.className}`}>Project</div>
        <div className={`medium-para ${jost.className}`}>Blog</div>
        <div className={`medium-para ${jost.className}`}>Contact</div>
        <div className={`medium-para ${jost.className}`}>
          <Image src={search} alt="searchIcon" />
        </div>
      </div>
    </div>
  );
}
