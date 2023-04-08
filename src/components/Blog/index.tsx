import { jostFont } from "@/utils/fonts";
import images from "@/assets/blogs";
import Item from "./Item";

export default function Blog() {
  return (
    <div className="text-center">
      <h1>Articles & News</h1>
      <p className={`large-para ${jostFont.className}`}>
        It is a long established fact that a reader will be distracted by the of
        readable content of a page when lookings at its layouts the points of
        using.
      </p>
      <Item />
    </div>
  );
}
