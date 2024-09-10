import { useSelector } from "react-redux";

export default function EditorsPick() {
  /*const cards = [
    {
      src: "/editorspick/product-cover-11.png",
      alt: "carditem1",
      buttonText: "MEN",
    },
    {
      src: "/editorspick/media bg-cover.png",
      alt: "carditem2",
      buttonText: "WOMEN",
    },
    {
      src: "/editorspick/media bg-cover2.png",
      alt: "carditem3",
      buttonText: "ACCESSORIES",
    },
    {
      src: "/editorspick/filter2.png",
      alt: "carditem4",
      buttonText: "KIDS",
    },
  ]; */

  const categories = useSelector((state) => state.products?.categories);
  const sortedCategories = [...categories].sort((a, b) => b.rating - a.rating);

  return (
    <div className="mx-5 flex flex-col items-center font-montserrat">
      <h2 className="m-5 mt-28 text-center text-2xl font-bold leading-[32px] tracking-[0.1px]">
        EDITOR'S PICK
      </h2>
      <p className="max-w-48 text-center text-sm font-light leading-[20px] tracking-[0.2px] text-[#737373] lg:max-w-96">
        Problems trying to resolve the conflict between
      </p>
      <div className="mt-6 flex flex-col gap-6 lg:w-4/5 lg:flex-row">
        {sortedCategories
          .slice(0, 3) // take top 5 categories
          .map((category, index) => (
            <div key={index} className="relative w-full">
              <img
                src={category.img}
                alt={category.title}
                className="h-full w-full object-cover"
              />
              <a
                href={`/shop/${category.gender === "k" ? "kadin" : "erkek"}/${category.title.toLowerCase()}`}
                className="absolute bottom-4 left-4 bg-white px-4 py-2 text-sm font-semibold text-black"
              >
                {category.title}
              </a>
            </div>
          ))}
        <div className="lg:flex-2 flex flex-col gap-6 lg:flex lg:flex-col lg:gap-[16px]">
          {sortedCategories.slice(3, 5).map((category, index) => (
            <div key={index} className={"relative lg:h-[242px] lg:w-[240px]"}>
              <img
                src={category.img}
                alt={category.title}
                className="h-full w-full object-cover"
              />
              <a
                href={`/shop/${category.gender === "k" ? "kadin" : "erkek"}/${category.title.toLowerCase()}`}
                className="absolute bottom-4 left-4 bg-white px-4 py-2 text-sm font-semibold text-black"
              >
                {category.title}
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
