import { Button } from "../../../components/ui/button";

export default function Container() {
  return (
    <div className="mx-5 flex flex-col items-center font-montserrat lg:flex-row-reverse">
      <div className="flex flex-col items-center justify-center lg:w-2/3 lg:items-start lg:justify-start lg:p-5">
        <p className="mt-48 text-sm font-bold text-[#BDBDBD]">SUMMER 2020</p>
        <h1 className="mt-10 max-w-72 text-center text-3xl font-bold leading-relaxed text-black lg:text-start">
          Part of the Neural Universe
        </h1>
        <p className="align-center mt-10 max-w-sm px-4 text-center text-xl leading-normal text-[#737373] lg:max-w-lg lg:text-start">
          We know how large objects will act, but things on a small scale.
        </p>
        <div className="flex flex-col items-center justify-center lg:flex-row">
          <Button className="m-5 h-[52px] w-[151px] !bg-[#23A6F0] p-5 lg:!bg-[#2DC071]">
            BUY NOW
          </Button>
          <Button
            variant="outline"
            className="m-5 h-[52px] w-[151px] border-[#23A6F0] p-5 text-[#23A6F0] lg:border-[#2DC071] lg:text-[#2DC071]"
          >
            Learn More
          </Button>
        </div>
      </div>
      <div className="w-full lg:relative">
        <img
          src="/asian-woman-man-with-winter-clothes 1.png"
          className="w-full lg:bottom-0"
        />
      </div>
    </div>
  );
}
