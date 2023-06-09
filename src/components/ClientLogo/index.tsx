import images from "@/assets/client-logos";
import Image from "next/image";

export default function ClientLogo() {
  return (
    <div className="w-full flex justify-around my-[15rem]">
      {images.map((item, index) => {
        return <Image src={item} alt="" key={index} />;
      })}
    </div>
  );
}
