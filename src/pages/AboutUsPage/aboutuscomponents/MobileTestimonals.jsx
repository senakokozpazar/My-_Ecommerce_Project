import { Button } from "@/components/ui/button";

export default function MobileTestimonals() {
  return (
    <div className="flex flex-col items-center justify-center bg-[#2A7CC7] p-10 font-montserrat text-white lg:flex-row lg:justify-between">
      <div className="flex flex-col items-center justify-center lg:p-20">
        {" "}
        <p className="p-10 text-center text-base font-semibold">WORK WITH US</p>
        <p className="max-w-80 p-10 text-center text-[40px] font-semibold leading-[50px]">
          Now Let’s grow Yours
        </p>
        <p className="max-w-80 p-10 text-center text-sm font-light">
          The gradual accumulation of information about atomic and small-scale
          behavior during the first quarter of the 20th{" "}
        </p>
        <Button
          variant="outline"
          size="lg"
          className="bg-transparent text-white"
        >
          Button
        </Button>
      </div>
      <div className="hidden lg:block">
        <img
          src="/aboutusdesktop.png
      "
        />
      </div>
    </div>
  );
}
