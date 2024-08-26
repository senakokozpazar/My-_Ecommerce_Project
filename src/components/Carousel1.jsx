import { Button } from "./ui/button";

export default function Carousel1() {
  return (
    <div className="relative mx-5 font-montserrat lg:m-0">
      <img
        src="/carousel1.jpg"
        alt="Carousel Item"
        className="w-full lg:hidden"
      />
      <img
        src="/shop-hero-1-product-slide-1.jpg"
        alt="carousel"
        className="hidden w-full lg:block"
      />
      <p className="absolute left-40 top-80 text-sm font-bold text-white lg:right-20 lg:top-20 lg:my-32 lg:text-left">
        SUMMER 2020
      </p>
      <h1 className="absolute left-20 right-20 top-96 text-3xl font-bold leading-relaxed text-white lg:left-40 lg:top-28 lg:my-40">
        NEW COLLECTION
      </h1>
      <p className="absolute left-20 right-20 top-[26rem] my-44 px-4 text-center text-lg leading-normal text-white lg:left-40 lg:top-40 lg:max-w-64 lg:p-0 lg:text-left">
        We know how large objects will act, but things on a small scale.
      </p>

      <button className="absolute left-1 top-1/2 p-2">
        <i class="fa-solid fa-chevron-left text-4xl text-white"></i>
      </button>
      <button className="absolute right-1 top-1/2 p-2">
        <i class="fa-solid fa-chevron-left fa-flip-horizontal text-4xl text-white"></i>
      </button>
      <Button className="absolute bottom-40 left-[35%] h-10 w-44 !bg-green-600 p-7 text-lg lg:bottom-28 lg:left-40">
        SHOP NOW
      </Button>
    </div>
  );
}
