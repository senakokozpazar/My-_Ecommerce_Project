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
    <div className="mx-5 flex flex-col items-center font-montserrat">
      <h2 className="m-5 mt-28 text-center text-2xl font-bold leading-[32px] tracking-[0.1px]">
        EDITOR'S PICK
      </h2>
      <p className="max-w-48 text-center text-sm font-light leading-[20px] tracking-[0.2px] text-[#737373] lg:max-w-96">
        Problems trying to resolve the conflict between
      </p>
      <div className="mt-6 flex flex-col gap-6 lg:w-3/5 lg:flex-row">
        {cards.slice(0, 2).map((card, index) => (
          <div
            key={index}
            className={`relative ${
              index === 0
                ? "lg:w-[510px]] lg:h-[500px]"
                : "lg:h-[500px] lg:w-[240px]"
            }`}
          >
            <img
              src={card.src}
              alt={card.alt}
              className="h-full w-full object-cover"
            />
            <button className="absolute bottom-4 left-4 bg-white px-4 py-2 text-sm font-semibold text-black">
              {card.buttonText}
            </button>
          </div>
        ))}
        <div className="lg:flex-2 flex flex-col gap-6 lg:flex lg:flex-col lg:gap-[16px]">
          {cards.slice(2).map((card, index) => (
            <div key={index} className={"relative lg:h-[242px] lg:w-[240px]"}>
              <img
                src={card.src}
                alt={card.alt}
                className="h-full w-full object-cover"
              />
              <button className="absolute bottom-4 left-4 bg-white px-4 py-2 text-sm font-semibold text-black">
                {card.buttonText}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
