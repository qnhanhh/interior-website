import Image from "next/image";
import images from "@/assets/avatars";
import { testimonialType } from "@/types";
import { jostFont } from "@/utils/fonts";

export default function Item({
  username,
  location,
  content,
  avatarIndex,
}: testimonialType) {
  return (
    <div className="bg-white py-20 px-12 rounded-[3rem]">
      <div className="flex items-center gap-8">
        <Image className="rounded-full" src={images[avatarIndex]} alt="" />
        <div>
          <h3>{username}</h3>
          <p className={`small-para ${jostFont.className}`}>{location}</p>
        </div>
      </div>
      <p className={`mt-10 large-para ${jostFont.className}`}>{content}</p>
    </div>
  );
}
