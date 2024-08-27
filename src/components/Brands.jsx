import { brandlogos } from "@/mockdatas/brandlogos";

export default function Brands() {
  return (
    <div className="flex w-full flex-col bg-[#FAFAFA] lg:mb-5 lg:flex-row">
      {brandlogos.map((brand) => (
        <div
          key={brand.id}
          className="m-20 flex flex-col items-center justify-center"
        >
          <img src={brand.src} />
        </div>
      ))}
    </div>
  );
}
