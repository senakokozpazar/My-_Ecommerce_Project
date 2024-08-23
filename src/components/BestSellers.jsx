export default function BestSellers() {
  const products = [
    {
      id: 1,
      imageSrc: "/bestsellers/product-cover-5.png",
      title: "Graphic Design",
      department: "English Department",
      oldPrice: "$16.48",
      newPrice: "$6.48",
      colors: ["#23A6F0", "#23856D", "#E77C40", "#252B42"],
    },
    {
      id: 2,
      imageSrc: "/bestsellers/product-cover-6.png",
      title: "Graphic Design",
      subtitle: "English Department",
      oldPrice: "$16.48",
      newPrice: "$6.48",
      colors: ["#23A6F0", "#23856D", "#E77C40", "#252B42"],
    },
    {
      id: 3,
      imageSrc: "/bestsellers/product-cover-7.png",
      title: "Graphic Design",
      subtitle: "English Department",
      oldPrice: "$16.48",
      newPrice: "$6.48",
      colors: ["#23A6F0", "#23856D", "#E77C40", "#252B42"],
    },
    {
      id: 4,
      imageSrc: "/bestsellers/product-cover-8.png",
      title: "Graphic Design",
      subtitle: "English Department",
      oldPrice: "$16.48",
      newPrice: "$6.48",
      colors: ["#23A6F0", "#23856D", "#E77C40", "#252B42"],
    },
    {
      id: 5,
      imageSrc: "/bestsellers/product-cover-9.png",
      title: "Graphic Design",
      subtitle: "English Department",
      oldPrice: "$16.48",
      newPrice: "$6.48",
      colors: ["#23A6F0", "#23856D", "#E77C40", "#252B42"],
    },
    {
      id: 6,
      imageSrc: "/bestsellers/product-cover-10.png",
      title: "Graphic Design",
      subtitle: "English Department",
      oldPrice: "$16.48",
      newPrice: "$6.48",
      colors: ["#23A6F0", "#23856D", "#E77C40", "#252B42"],
    },
    {
      id: 7,
      imageSrc: "/bestsellers/product-cover-11.png",
      title: "Graphic Design",
      subtitle: "English Department",
      oldPrice: "$16.48",
      newPrice: "$6.48",
      colors: ["#23A6F0", "#23856D", "#E77C40", "#252B42"],
    },
  ];

  return (
    <div className="font-montserrat mx-5 flex flex-col items-center">
      <p className="mt-24">Featured Products</p>
      <h2 className="m-5 text-center text-2xl font-bold leading-[32px] tracking-[0.1px]">
        BESTSELLERS <br /> PRODUCTS
      </h2>
      <p className="text-center text-sm font-light leading-[20px] tracking-[0.2px] text-[#737373]">
        Problems trying to resolve <br /> the conflict between
      </p>
      {products.map((product) => (
        <div
          key={product.id}
          className="m-10 flex flex-col justify-center gap-3"
        >
          <img src={product.imageSrc} alt={product.title} />
          <p className="mt-4 text-base font-semibold">{product.title}</p>
          <p className="text-sm font-semibold text-gray-500">
            {product.department}
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
    </div>
  );
}
