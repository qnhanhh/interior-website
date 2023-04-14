import { jostFont } from "@/utils/fonts";
import styles from "./Counter.module.css";
import { counterData } from "@/data/mockData";

export default function Counter() {
  return (
    <div className="py-[15rem] my-[20rem] grid grid-cols-4 w-full text-center bg-[var(--primary-3)]">
      {counterData.map((item, index) => {
        return (
          <div key={index} className={styles.container}>
            <p className="display-text text-[#CDA274]">{item.number}</p>
            <p className={`large-para capitalize ${jostFont.className}`}>
              {item.content}
            </p>
          </div>
        );
      })}
    </div>
  );
}
