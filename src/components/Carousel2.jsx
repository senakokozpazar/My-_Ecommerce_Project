import { Button } from "./ui/button";

export default function Carousel2() {
  return (
    <div className="font-montserrat relative mx-5 flex flex-col items-center justify-center bg-[#23856D]">
      <p className="mt-64 text-sm font-bold text-white">SUMMER 2020</p>
      <h1 className="mt-10 text-3xl font-bold leading-relaxed text-white">
        Vita Classic <br /> Product
      </h1>
      <p className="align-center mt-10 max-w-72 px-4 text-center text-xl leading-normal text-white">
        We know how large objects will act, but things on a small scale.
      </p>
      <p className="align-center mt-10 p-5 text-2xl font-semibold text-white">
        $16.48
      </p>
      <div className="flex justify-between p-5">
        <button className="absolute left-5">
          <i class="fa-solid fa-chevron-left text-4xl text-white"></i>
        </button>
        <Button className="h-10 w-44 rounded-none !bg-green-600 p-7 text-lg">
          ADD TO CART
        </Button>
        <button className="absolute right-5">
          <i class="fa-solid fa-chevron-left fa-flip-horizontal text-4xl text-white"></i>
        </button>
      </div>
      <div className="w-full">
        <img src="/carousel2.png" className="w-full" />
      </div>
    </div>
  );
}
