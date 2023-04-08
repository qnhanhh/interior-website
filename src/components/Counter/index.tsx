import { jostFont } from "@/utils/fonts";
import styles from "./Counter.module.css";

const counterData = [
  {
    number: 12,
    content: "Years of experience",
  },
  {
    number: 85,
    content: "Success project",
  },
  {
    number: 15,
    content: "Active project",
  },
  {
    number: 95,
    content: "Happy customers",
  },
];

export default function Counter() {
  return (
    <div className="py-[15rem] grid grid-cols-4 w-full text-center bg-[var(--primary-3)]">
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
