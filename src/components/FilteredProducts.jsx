import { products } from "@/mockdatas/product";
import { Button } from "./ui/button";

export default function FilteredProducts() {
  return (
    <div className="font-montserrat">
      <div className="flex flex-col items-center justify-center gap-3">
        <div className="leading-[24px] tracking-[0.2px] text-[#737373]">
          <p className="text-sm font-semibold">Showing all 12 results</p>
        </div>
        <div className="mt-4 flex gap-3">
          <p className="font-semibold text-[#737373]">Views:</p>
          <Button variant="outline" size="sm">
            <img src="/Vector.png" />
          </Button>
          <Button variant="outline" size="sm">
            <img src="/Vector2.png" />
          </Button>
        </div>
        <div className="m-3 flex gap-2">
          <Button variant="outline" className="text-sm text-[#737373]">
            Popularity
            <i className="fa-solid fa-chevron-down ml-1 text-[#737373]"></i>
          </Button>
          <Button className="className=text-sm bg-[#23A6F0]">Filter</Button>
        </div>
      </div>
      {products.slice(0, 4).map((product) => (
        <div
          key={product.id}
          className="m-10 flex flex-col items-center justify-center gap-3 lg:hidden"
        >
          <img
            src={product.imageSrc}
            alt={product.title}
            className="h-[427px] w-[348px]"
          />
          <p className="mt-4 text-center text-base font-semibold">
            {product.title}
          </p>
          <p className="text-center text-sm font-semibold text-gray-500">
            {product.subtitle}
          </p>
          <div className="mt-2 flex items-center justify-center">
            <p className="mr-2 text-base font-semibold text-[#BDBDBD]">
              {product.oldPrice}
            </p>
            <p className="text-base font-semibold text-[#23856D]">
              {product.newPrice}
            </p>
          </div>
          <div className="mt-4 flex justify-center space-x-2">
            {product.colors.map((color, index) => (
              <div
                key={index}
                className="h-6 w-6 rounded-full"
                style={{ backgroundColor: color }}
              ></div>
            ))}
          </div>
        </div>
      ))}
      <div className="flex items-center justify-center">
        <Button
          variant="outline"
          className="rounded-none rounded-bl-lg rounded-tl-lg text-[#23A6F0] hover:bg-[#F3F3F3] hover:text-[#BDBDBD]"
        >
          First
        </Button>
        <Button
          variant="outline"
          className="rounded-none text-[#23A6F0] hover:bg-[#23A6F0] hover:text-white"
        >
          1
        </Button>
        <Button
          variant="outline"
          className="rounded-none text-[#23A6F0] hover:bg-[#23A6F0] hover:text-white"
        >
          2
        </Button>
        <Button
          variant="outline"
          className="rounded-none text-[#23A6F0] hover:bg-[#23A6F0] hover:text-white"
        >
          3
        </Button>
        <Button
          variant="outline"
          className="rounded-none rounded-br-lg rounded-tr-lg text-[#23A6F0] hover:bg-[#F3F3F3] hover:text-[#BDBDBD]"
        >
          Next
        </Button>
      </div>
    </div>
  );
}
