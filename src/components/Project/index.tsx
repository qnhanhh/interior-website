import { jostFont } from "@/utils/fonts";
import images from "@/assets/project-images";
import Item from "./Item";

export default function Project() {
  return (
    <div className="text-center">
      <h1>Follow Our Projects</h1>
      <p className={`large-para ${jostFont.className}`}>
        It is a long established fact that a reader will be distracted by the of
        readable content of page lookings at its layouts points.
      </p>
      <div className="grid grid-cols-2 gap-x-[10rem] gap-y-[5.6rem] mt-[9rem]">
        {images.map((item, index) => {
          return <Item key={index} src={item} />;
        })}
      </div>
    </div>
  );
}
