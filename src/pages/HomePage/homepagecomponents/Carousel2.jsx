import { Button } from "../../../components/ui/button";

export default function Carousel2() {
  return (
    <div className="relative mx-5 flex flex-col items-center justify-center bg-[#23856D] font-montserrat lg:m-0 lg:h-1/5 lg:items-start lg:justify-start lg:pl-32">
      <p className="mt-64 text-sm font-bold text-white">SUMMER 2020</p>
      <h1 className="mt-10 text-3xl font-bold leading-relaxed text-white">
        Vita Classic <br /> Product
      </h1>
      <p className="align-center mt-10 max-w-72 px-4 text-center text-xl leading-normal text-white lg:p-0 lg:text-left">
        We know how large objects will act, but things on a small scale.
      </p>
      <div className="flex flex-col items-center justify-center gap-5 lg:flex-row lg:justify-start lg:p-0">
        <p className="align-center mx-10 my-10 p-5 text-2xl font-semibold text-white lg:mx-0 lg:px-0">
          $16.48
        </p>
        <Button className="ml-5 h-10 w-44 !bg-green-600 p-7 text-lg">
          ADD TO CART
        </Button>
      </div>

      <div className="flex justify-between p-5">
        <button className="absolute left-5 top-80 lg:top-72">
          <i class="fa-solid fa-chevron-left text-4xl text-white"></i>
        </button>

        <button className="absolute right-5 top-80 lg:top-72">
          <i class="fa-solid fa-chevron-left fa-flip-horizontal text-4xl text-white"></i>
        </button>
      </div>

      <img
        src="/carousel2.png"
        className="w-full lg:absolute lg:bottom-0 lg:right-20 lg:top-20 lg:w-1/3"
      />
    </div>
  );
}
