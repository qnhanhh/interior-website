import Image from "next/image";
import images from "@/assets/avatars";
import { jostFont } from "@/utils/fonts";

type itemType = {
  username: string;
  location: string;
  content: string;
  avatarIndex: number;
};

export default function Item({
  username,
  location,
  content,
  avatarIndex,
}: itemType) {
  return (
    <div className="bg-white p-[6rem] rounded-[3rem]">
      <div className="flex items-center gap-8">
        <Image className="rounded-full" src={images[avatarIndex]} alt="" />
        <div>
          <h3>{username}</h3>
          <p className={`small-para ${jostFont.className}`}>{location}</p>
        </div>
      </div>
      <p className={`mt-[2.5rem] large-para ${jostFont.className}`}>
        {content}
      </p>
    </div>
  );
}
