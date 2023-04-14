import Item from "./Item";
import { workData } from "@/data/mockData";

export default function Work() {
  return (
    <div className="grid grid-cols-3 gap-[4.2rem] my-[20rem]">
      {workData.map((item, index) => {
        return <Item key={index} title={item.title} content={item.content} />;
      })}
    </div>
  );
}
