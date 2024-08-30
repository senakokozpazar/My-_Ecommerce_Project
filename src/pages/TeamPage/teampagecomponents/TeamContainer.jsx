import BreadCrumb from "@/components/breadcrumb";

export default function TeamContainer() {
  return (
    <>
      {" "}
      <div className="flex flex-col items-center justify-center font-montserrat font-semibold text-[#737373]">
        <p className="text-center text-base">WHAT WE DO</p>
        <p className="m-5 w-2/3 text-center text-[40px] leading-[50px] text-[#252B42]">
          Innovation tailored for you
        </p>
        <BreadCrumb />
      </div>
      <div className="mx-10 flex flex-col items-center justify-center">
        <div>
          <img src="/teampage/red.png" />
        </div>
        <div className="m-auto my-5 flex flex-wrap gap-2">
          <div>
            <img src="/teampage/cream.png" />
          </div>
          <div>
            <img src="/teampage/2.png" />
          </div>
          <div>
            <img src="/teampage/3.png" />
          </div>
          <div>
            <img src="/teampage/4.png" />
          </div>
        </div>
      </div>
    </>
  );
}
