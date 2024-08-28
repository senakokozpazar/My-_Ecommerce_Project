export default function Detail() {
  const paragraphs = [
    "Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.",
    "Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.",
    "Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.",
  ];
  return (
    <div className="flex flex-col items-center justify-center p-10">
      <img
        src="/productdetail.png"
        className="rounded shadow-lg shadow-gray-400"
      />
      <p className="-ml-5 mt-10 justify-center text-2xl font-semibold leading-[32px] tracking-[0.1] text-[#252B42]">
        the quick fox jumps over
      </p>

      {paragraphs.map((paragraph, index) => (
        <p
          key={index}
          className="mt-10 w-2/3 text-left text-sm leading-[20px] tracking-[0.2] text-[#737373]"
        >
          {paragraph}
        </p>
      ))}
      <div className="flex flex-col items-center justify-start">
        {" "}
        <p className="-ml-5 mt-10 justify-center text-2xl font-semibold leading-[32px] tracking-[0.1] text-[#252B42]">
          the quick fox jumps over
        </p>
        <ul className="-ml-5 mt-5 flex flex-col gap-2 text-sm font-semibold text-[#737373]">
          <li>
            <i className="fa-solid fa-chevron-right mr-2 items-center"></i>
            the quick fox jumps over the lazy dog
          </li>
          <li>
            <i className="fa-solid fa-chevron-right mr-2 items-center"></i>the
            quick fox jumps over the lazy dog
          </li>
          <li>
            <i className="fa-solid fa-chevron-right mr-2 items-center"></i>the
            quick fox jumps over the lazy dog
          </li>
          <li>
            <i className="fa-solid fa-chevron-right mr-2 items-center"></i>the
            quick fox jumps over the lazy dog
          </li>
        </ul>
      </div>
    </div>
  );
}
