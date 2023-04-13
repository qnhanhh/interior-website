import Item from "./Item";

const workData = [
  {
    title: "Project Plan",
    content:
      "There are many variations of the passages of lorem Ipsum from available, majority.",
  },
  {
    title: "Interior Work",
    content:
      "There are many variations of the passages of lorem Ipsum from available, majority.",
  },
  {
    title: "Realization",
    content:
      "There are many variations of the passages of lorem Ipsum from available, majority.",
  },
];

export default function Work() {
  return (
    <div className="grid grid-cols-3 gap-[4.2rem] my-[20rem]">
      {workData.map((item, index) => {
        return <Item key={index} title={item.title} content={item.content} />;
      })}
    </div>
  );
}
