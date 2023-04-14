import { jostFont } from "@/utils/fonts";
import Item from "./Item";
import { blogData } from "@/data/mockData";

export default function Blog() {
  return (
    <div className="text-center">
      <h1>Articles & News</h1>
      <p className={`large-para mt-5 mb-20 ${jostFont.className}`}>
        It is a long established fact that a reader will be distracted by the of
        readable content of a page when lookings at its layouts the points of
        using.
      </p>
      <div className="grid grid-cols-3 gap-[4.8rem]">
        {blogData.map((item, index) => {
          return <Item key={index} info={item} />;
        })}
      </div>
    </div>
  );
}
