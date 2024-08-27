import { brandlogos } from "@/mockdatas/brandlogos";

export default function Brands() {
  return (
    <div className="flex w-full flex-col bg-[#FAFAFA]">
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
