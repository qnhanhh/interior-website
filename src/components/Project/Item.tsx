import Image from "next/image";
import { jostFont } from "@/utils/fonts";
import { projectType } from "@/types";
import rightVector from "@/assets/rightVector.svg";

export default function Item({ src }: projectType) {
  return (
    <div>
      <Image className={`rounded-[8rem]`} src={src} alt="" />
      <div className="flex justify-between mt-[2.4rem]">
        <div>
          <h3 className="text-left">Modern kitchen</h3>
          <p className={`large-para ${jostFont.className}`}>
            Decor / Architecture
          </p>
        </div>
        <div className="bg-[var(--primary-3)] w-28 h-28 rounded-full flex items-center justify-center">
          <Image src={rightVector} alt="" />
        </div>
      </div>
    </div>
  );
}
