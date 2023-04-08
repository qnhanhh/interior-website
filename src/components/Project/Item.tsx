import Image, { StaticImageData } from "next/image";
import { jostFont } from "@/utils/fonts";
import rightVector from "@/assets/rightVector.svg";
import styles from "./Project.module.css";

type itemType = {
  src: StaticImageData;
  corner: string
};

export default function Item({ src, corner }: itemType) {
  return (
    <div>
      <Image className={`rounded-${corner}-[8rem]`} src={src} alt="" />
      <div className="flex justify-between mt-[2.4rem]">
        <div>
          <h3 className="text-left">Modern kitchen</h3>
          <p className={`large-para ${jostFont.className}`}>
            Decor / Architecture
          </p>
        </div>
        <div className={styles.vectorContainer}>
          <Image src={rightVector} alt="" />
        </div>
      </div>
    </div>
  );
}
