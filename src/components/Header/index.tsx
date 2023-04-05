import Image from "next/image";
import { jostFont } from "@/utils/fonts";
import logo from "@/assets/logo.svg";
import search from "@/assets/search.svg";

export default function Header() {
  return (
    <div className="flex items-center justify-between mb-[5.7rem] pt-[4.4rem] w-full">
      <div className="flex gap-[1rem]">
        <Image src={logo} alt="logoImage" />
        <p className="text-[4rem]">Interno</p>
      </div>
      <div className="flex gap-[3rem] pt-3">
        <div className={`medium-para ${jostFont.className}`}>Home</div>
        <div className={`medium-para ${jostFont.className}`}>Pages</div>
        <div className={`medium-para ${jostFont.className}`}>Services</div>
        <div className={`medium-para ${jostFont.className}`}>Project</div>
        <div className={`medium-para ${jostFont.className}`}>Blog</div>
        <div className={`medium-para ${jostFont.className}`}>Contact</div>
        <div className={`medium-para ${jostFont.className}`}>
          <Image src={search} alt="searchIcon" />
        </div>
      </div>
    </div>
  );
}
