import { jostFont } from "@/utils/fonts";
import Button, { ButtonTypes } from "../Button";

type itemType = {
  title: string;
  content: string;
};

export default function Item({ title, content }: itemType) {
  return (
    <div className="text-center">
      <h3>{title}</h3>
      <p className={`large-para ${jostFont.className}`}>{content}</p>
      <Button content="Read More" type={ButtonTypes.Plain} />
    </div>
  );
}
