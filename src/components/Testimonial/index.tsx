import Item from "./Item";
import { userData } from "@/data/mockData";

export default function Testimonial() {
  return (
    <div className="bg-[var(--primary-3)] w-full flex flex-col items-center rounded-[7rem] py-[8.8rem] px-10 mt-[20rem]">
      <h1 className="w-[55rem] mb-[3.8rem] text-center">
        What the People Thinks About Us
      </h1>
      <div className="grid grid-cols-3 gap-8">
        {userData.map((item, index) => {
          return (
            <Item
              username={item.username}
              location={item.location}
              content={item.content}
              avatarIndex={index}
              key={index}
            />
          );
        })}
      </div>
    </div>
  );
}
