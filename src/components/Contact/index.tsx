import { jostFont } from "@/utils/fonts";
import Button, { ButtonTypes } from "../Button";

export default function Contact() {
  return (
    <div className="my-[20rem] w-full text-center rounded-[7rem] bg-[var(--primary-2)] py-32 px-[31.5rem]">
      <h1 className="text-white">Wanna join the interno?</h1>
      <p className={`large-para mt-4 text-white ${jostFont.className}`}>
        It is a long established fact will be distracted.
      </p>
      <div className="flex justify-center mt-[3.2rem]">
        <Button content="Contact With Us" type={ButtonTypes.Inverted} />
      </div>
    </div>
  );
}
