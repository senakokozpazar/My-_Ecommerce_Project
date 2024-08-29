import { Button } from "@/components/ui/button";
import ContactCard from "./ContactCard";

export default function ContactTypes() {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="mb-10 mt-20">
        <p className="text-sm font-semibold">VISIT OUR OFFICE</p>
      </div>
      <div className="flex items-center justify-center">
        <p className="mb-20 w-1/2 text-center text-[40px] font-semibold leading-[50px] tracking-[0.2px]">
          We help small businesses with big ideas
        </p>
      </div>
      <div className="lg:flex lg:flex-row">
        <ContactCard
          bgColor=""
          textColor=""
          imgSrc="/contactimages/icn settings .icn-xl.png"
        />
        <ContactCard
          bgColor="bg-[#252B42]"
          textColor="text-white"
          imgSrc="/contactimages/Vector.png"
        />

        <ContactCard bgColor="" textColor="" imgSrc="/contactimages/ok.png" />
      </div>

      <div className="m-5 flex flex-col gap-7">
        <div className="flex items-center justify-center">
          {" "}
          <img src="/contactimages/Arrow 2.png" alt="ok" />
        </div>

        <p className="mb-7 text-center text-base font-semibold">
          WE CAN'T WAIT TO MEET YOU
        </p>
        <p className="mb-10 text-center text-[58px] font-semibold leading-[80px] tracking-[0.2]">
          Let's Talk
        </p>
        <Button className="bg-[#23A6F0]">Try it free now</Button>
      </div>
    </div>
  );
}
