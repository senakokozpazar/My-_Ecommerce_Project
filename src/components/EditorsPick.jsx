export default function EditorsPick() {
  const cards = [
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
  ];

  return (
    <div className="font-montserrat mx-5 flex flex-col items-center">
      <h2 className="m-5 mt-28 text-center text-2xl font-bold leading-[32px] tracking-[0.1px]">
        EDITOR'S PICK
      </h2>
      <p className="text-center text-sm font-light leading-[20px] tracking-[0.2px] text-[#737373]">
        Problems trying to resolve <br /> the conflict between
      </p>
      <div className="mt-6 flex flex-col gap-6">
        {cards.map((card, index) => (
          <div key={index} className="relative">
            <img
              src={card.src}
              alt={card.alt}
              className="w-full object-cover"
            />
            <button className="absolute bottom-4 left-4 bg-white px-4 py-2 text-sm font-semibold text-black">
              {card.buttonText}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
