import ColorCircle from "@/components/ColorCircle";
import StarRate from "./starRate";

export default function ProductDetails() {
  return (
    <div className="flex flex-col justify-start font-montserrat">
      <p className="mx-10 mt-10 text-xl leading-[30px] tracking-[0.2]">
        Floating Phone
      </p>

      <div className="justify- flex items-center gap-1">
        <StarRate />
        <p className="text-sm font-semibold leading-[24px] tracking-[0.2]">
          10 Reviews
        </p>
      </div>
      <div className="flex flex-col gap-2 p-10">
        <p className="text-2xl font-semibold leading-[32px] tracking-[0.1]">
          $1,139.33
        </p>
        <p className="text-sm font-semibold">
          Availability: <span className="text-[#23A6F0]">In Stock</span>
        </p>
        <p className="mb-5 mt-10 w-3/4 text-justify">
          Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.
          RELIT official consequent door ENIM RELIT Moille. Excitation venial
          consequent sent nostrum met.
        </p>
        <hr></hr>
      </div>
      <div className="mt-1 flex justify-start p-10 pt-0">
        <ColorCircle />
      </div>
    </div>
  );
}
