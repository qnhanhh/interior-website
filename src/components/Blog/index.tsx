import { jostFont } from "@/utils/fonts";
import Item from "./Item";

const blogData = [
  {
    imageIndex: 0,
    title: "Let's get solution for building construction work",
    date: "26 December, 2022",
    tag: "Kitchen design",
  },
  {
    imageIndex: 1,
    title: "Low cost latest invented interior designing ideas",
    date: "25 December, 2022",
    tag: "Living design",
  },
  {
    imageIndex: 2,
    title: "Best for any office & business interior solution",
    date: "22 December, 2022",
    tag: "Interior design",
  },
];

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
