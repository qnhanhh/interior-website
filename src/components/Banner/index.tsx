import Image from "next/image"
import { jostFont } from "@/utils/fonts";
import bannerImage from '@/assets/bannerImage.png'
import Button from "../Button";

export default function Banner(){
    return(
        <div>
            <Image src={bannerImage} alt="bannerImage" />
            <div>
                <p className="text-[6.5rem] capitalize">Let your home be unique</p>
                <p className={`large-para ${jostFont.className}`}>There are many variations of the passages of lorem Ipsum from available, majority.</p>
                <Button content="Get Started" />
            </div>
        </div>
    )
}