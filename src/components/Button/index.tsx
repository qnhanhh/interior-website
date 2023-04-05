import Image from "next/image";
import styles from './Button.module.css'
import rightArrow from "@/assets/rightArrow.svg";
import { jostFont } from "@/utils/fonts";

type buttonType = {
  content: string;
};

export default function Button({ content }: buttonType) {
  return (
    <button className={styles.button}>
      <span className={`small-para font-semibold text-white ${jostFont.className}`}>
        {content}
      </span>
      <Image src={rightArrow} alt="rightArrow" />
    </button>
  );
}
