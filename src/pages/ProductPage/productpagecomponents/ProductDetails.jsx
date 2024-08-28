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
      <div>
        <p>$1,139.33</p>
        <p>
          Availability: <span>In Stock</span>
        </p>
        <p>
          Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.
          RELIT official consequent door ENIM RELIT Moille. Excitation venial
          consequent sent nostrum met.
        </p>
        <hr></hr>
      </div>
      <ColorCircle />
    </div>
  );
}
