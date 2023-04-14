import styles from "./Button.module.css";
import { jostFont } from "@/utils/fonts";
import { buttonType } from "@/types";

export const ButtonTypes = {
  Default: "default",
  Plain: "plain",
  Inverted: "inverted",
};

export default function Button({ content, type }: buttonType) {
  return (
    <button className={`${styles[type]}`}>
      <span className={`small-para font-semibold ${jostFont.className}`}>
        {content}
      </span>
      <svg
        width="19"
        height="17"
        viewBox="0 0 19 17"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M2 8.43542L15.7232 8.29857M10.6182 1.91138L17.1412 8.43436L10.4868 15.0887"
          stroke-width="2"
          stroke-linecap="square"
          stroke-linejoin="round"
        />
      </svg>
    </button>
  );
}
