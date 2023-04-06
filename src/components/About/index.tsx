import Image from "next/image";
import callIcon from "@/assets/callIcon.svg";
import aboutImage from "@/assets/aboutImage.png";
import { jostFont } from "@/utils/fonts";
import styles from './About.module.css'
import Button, { ButtonTypes } from "../Button";

export default function About() {
  return (
    <div className="flex items-center gap-[7.5rem]">
      <div className="w-[48rem]">
        <h1>We Create The Art Of Stylish Living Stylishly</h1>
        <p className={`large-para ${jostFont.className}`}>
          It is a long established fact that a reader will be distracted by the
          of readable content of a page when lookings at its layouts the points
          of using that it has a more-or-less normal.
        </p>
        <div className="flex items-center gap-6 my-[4.5rem]">
          <Image src={callIcon} alt="callIcon" />
          <div>
            <h3 className={`font-semibold ${jostFont.className}`}>0123456789</h3>
            <p className={`large-para ${jostFont.className}`}>
              Call Us Anytime
            </p>
          </div>
        </div>
        <Button content="Get Free Estimate" type={ButtonTypes.Default} />
      </div>

      <div className={styles.aboutImage}>
        <Image src={aboutImage} alt="aboutImage" />
      </div>
    </div>
  );
}
