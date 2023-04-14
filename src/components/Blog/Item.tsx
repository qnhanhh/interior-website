import Image from "next/image";
import { jostFont } from "@/utils/fonts";
import { blogType } from "@/types";
import images from "@/assets/blogs";
import rightVector from "@/assets/rightVector.svg";

export default function Item({ info }: blogType) {
  const { imageIndex, title, date, tag } = info;

  return (
    <div
      className={`p-8 text-left rounded-[6.2rem] border-[1px] border-[#E7E7E7] ${
        imageIndex % 2 ? "bg-[var(--primary-3)]" : ""
      }`}
    >
      <div className="relative">
        <Image
          className="rounded-t-[6.2rem] w-full"
          src={images[imageIndex]}
          alt=""
        />
        <p
          className={`absolute bottom-8 left-8 text-[1.6rem] rounded-[0.8rem] rounded-bl-none py-[0.6rem] px-[1rem] bg-white capitalize ${jostFont.className}`}
        >
          {tag}
        </p>
      </div>
      <h3 className="capitalize mt-8 mb-12">{title}</h3>
      <div className="flex justify-between items-center">
        <p className={`text-[1.6rem] ${jostFont.className}`}>{date}</p>
        <div
          className={`w-[5rem] h-[5rem] flex items-center justify-center rounded-full ${
            imageIndex % 2 ? "bg-white" : "bg-[var(--primary-3)]"
          }`}
        >
          <Image src={rightVector} alt="" />
        </div>
      </div>
    </div>
  );
}
