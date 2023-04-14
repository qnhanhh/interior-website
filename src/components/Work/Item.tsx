import { jostFont } from "@/utils/fonts";
import Button, { ButtonTypes } from "../Button";
import { workType } from "@/types";

export default function Item({ title, content }: workType) {
  return (
    <div className="text-center">
      <h3>{title}</h3>
      <p className={`large-para ${jostFont.className}`}>{content}</p>
      <Button content="Read More" type={ButtonTypes.Plain} />
    </div>
  );
}
