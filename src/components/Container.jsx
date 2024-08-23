import { Button } from "./ui/button";

export default function Container() {
  return (
    <div className="font-montserrat mx-5 flex flex-col items-center">
      <p className="mt-48 text-sm font-bold text-[#BDBDBD]">SUMMER 2020</p>
      <h1 className="mt-10 text-3xl font-bold leading-relaxed text-black">
        Part of the <br /> Neural <br /> Universe
      </h1>
      <p className="align-center mt-10 max-w-72 px-4 text-center text-xl leading-normal text-[#737373]">
        We know how large objects will act, but things on a small scale.
      </p>
      <Button className="m-5 rounded-none !bg-[#23A6F0] p-5">BUY NOW</Button>
      <Button
        variant="outline"
        className="m-5 rounded-none border-[#23A6F0] p-5 text-[#23A6F0]"
      >
        Learn More
      </Button>
      <div className="w-full">
        <img
          src="/asian-woman-man-with-winter-clothes 1.png"
          className="w-full"
        />
      </div>
    </div>
  );
}
