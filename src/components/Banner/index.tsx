import Image from "next/image"
import { jostFont } from "@/utils/fonts";
import bannerImage from '@/assets/bannerImage.png'
import styles from './Banner.module.css'
import Button from "../Button";

export default function Banner(){
    return(
        <div className={styles.container}>
            <Image src={bannerImage} alt="bannerImage" />
            <div className={styles.intro}>
                <p className="text-[6.5rem] capitalize leading-[8rem] mb-[1.8rem]">Let your home be unique</p>
                <p className={`large-para mb-[2rem] ${jostFont.className}`}>There are many variations of the passages of lorem Ipsum from available, majority.</p>
                <Button content="Get Started" />
            </div>
        </div>
    )
}