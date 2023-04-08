import Item from "./Item";

const userData = [
  {
    username: "Nattasha Mith",
    location: "Sydney, USA",
    content:
      "Lorem Ipsum is simply dummy text of the typesetting industry. Ipsum has been.",
  },
  {
    username: "Raymond Galario",
    location: "Sydney, Australia",
    content:
      "Lorem Ipsum is simply dummy text of the typesetting industry. Ipsum has been scrambled it to make a type book.",
  },
  {
    username: "Benny Roll",
    location: "Sydney, New York",
    content:
      "Lorem Ipsum is simply dummy text of the typesetting industry. Ipsum has been scrambled.",
  },
];

export default function Testimonial() {
  return (
    <div className="bg-[var(--primary-3)] w-full flex flex-col items-center rounded-[7rem] p-[8.8rem]">
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
              key={index}
            />
          );
        })}
      </div>
    </div>
  );
}
