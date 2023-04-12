import Image from "next/image";
import logo from "@/assets/logo.svg";
import icons from "@/assets/footer-icons";
import { jostFont } from "@/utils/fonts";

const footerData = [
  {
    section: "Pages",
    items: ["About Us", "Our Projects", "Our Team", "Contact Ts", "Services"],
  },
  {
    section: "Services",
    items: ["Kitchen", "Living Area", "Bathroom", "Dining Hall", "Bedroom"],
  },
  {
    section: "Contact",
    items: [
      "55 East Birchwood Ave, Brooklyn, New York 11201",
      "contact@interno.com",
      "(123) 456 - 7890",
    ],
  },
];

export default function Footer() {
  return (
    <div className="flex flex-col justify-center gap-[13.4rem]">
      <div className="flex justify-between gap-[10rem]">
        <div>
          <div className="flex gap-4">
            <Image src={logo} alt="" />
            <h1 className="text-[4rem]">Interno</h1>
          </div>
          <p className={`large-para ${jostFont.className}`}>
            It is a long established fact that a reader will be distracted
            lookings
          </p>
          <div className="flex gap-[5.4rem]">
            {icons.map((item, index) => {
              return <Image key={index} src={item} alt="" />;
            })}
          </div>
        </div>
        {footerData.map((item, index) => {
          return (
            <div key={index}>
              <h3 className="mb-4">{item.section}</h3>
              {item.items.map((item, index) => {
                return (
                  <p
                    key={index}
                    className={`leading-[6rem] large-para ${jostFont.className}`}
                  >
                    {item}
                  </p>
                );
              })}
            </div>
          );
        })}
      </div>

      <div>
        <p className={`text-center large-para ${jostFont.className}`}>
          Copyright © Interno | Designed by Victorflow Templates - Powered by
          Webflow
        </p>
      </div>
    </div>
  );
}
