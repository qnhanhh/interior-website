import Image from "next/image";
import { jostFont } from "@/utils/fonts";
import image1 from "@/assets/blogs/blog-1.png";
import rightVector from "@/assets/rightVector.svg";

export default function Item() {
  return (
    <div className="p-8 rounded-[6.2rem] border-[1px] border-[#E7E7E7]">
      <div>
        <Image className="rounded-t-[6.2rem]" src={image1} alt="" />
        <p className={`text-[1.6rem] capitalize ${jostFont.className}`}>
          Kitchen design
        </p>
      </div>
      <h3 className="capitalize">
        Let&apos;s get solution for building construction work
      </h3>
      <div className="flex justify-between items-center">
        <p className={`text-[1.6rem] ${jostFont.className}`}>
          26 December, 2022
        </p>
        <div className="w-[5rem] h-[5rem] flex items-center justify-center rounded-full bg-[var(--primary-3)]">
          <Image src={rightVector} alt="" />
        </div>
      </div>
    </div>
  );
}
