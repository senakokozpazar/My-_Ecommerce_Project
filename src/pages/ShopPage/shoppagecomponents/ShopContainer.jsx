import BreadCrumb from "@/components/breadcrumb";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

export default function ShopContainer() {
  const categories = useSelector((state) => state.products?.categories);
  const sortedCategories = [...categories].sort((a, b) => b.rating - a.rating);

  return (
    <div className="bg-[#FAFAFA] pb-10 font-montserrat">
      <div className="m-10 mb-0 flex items-center justify-center p-14">
        <h1 className="text-2xl font-semibold leading-[32px] tracking-[0.1px] text-[#252B42]">
          Shop
        </h1>
      </div>

      <div className="flex items-center justify-center">
        <BreadCrumb />
      </div>

      <div className="flex flex-col items-center justify-center gap-3 lg:m-3 lg:flex-row lg:justify-around lg:p-5">
        {sortedCategories
          .slice(0, 5) // take top 5 categories
          .map((category, index) => (
            <div key={index} className="relative h-1/2 w-full">
              <img
                src={category.img}
                alt={category.title}
                className="h-full w-full object-cover"
              />
              <a
                href={`/shop/${category.gender === "k" ? "kadin" : "erkek"}/${category.title.toLowerCase()}/${category.id}`}
                className="absolute bottom-4 left-4 bg-white px-4 py-2 text-sm font-semibold text-black"
              >
                {category.title}
              </a>
            </div>
          ))}
      </div>
    </div>
  );
}
