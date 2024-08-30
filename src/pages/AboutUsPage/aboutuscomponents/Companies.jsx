import Brands from "@/pages/ShopPage/shoppagecomponents/Brands";

export default function Companies() {
  return (
    <div className="flex flex-col items-center justify-center bg-[#FAFAFA] p-10 font-montserrat">
      <p className="max-w-80 p-5 text-center text-[40px] font-semibold leading-[50px] tracking-[0.2]">
        Big Companies Are Here
      </p>
      <p className="max-w-96 p-10 text-center text-sm font-light">
        Problems trying to resolve the conflict between the two major realms of
        Classical physics: Newtonian mechanics{" "}
      </p>
      <Brands />
    </div>
  );
}
