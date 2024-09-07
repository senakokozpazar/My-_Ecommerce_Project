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
      <div className="mx-10 flex flex-col items-center justify-center gap-3 lg:mx-0 lg:mb-20 lg:ml-24 lg:w-full lg:flex-row lg:gap-5 lg:p-5">
        <div className="lg:aspect-video lg:w-full">
          <img src="/teampage/red.png" className="lg:h-[530px] lg:w-[700px]" />
        </div>
        <div className="m-auto my-5 flex flex-wrap gap-2 lg:m-0 lg:w-full">
          <div className="lg:w-1/3">
            <img
              src="/teampage/cream.png"
              className="lg:h-[260px] lg:w-[361px]"
            />
          </div>
          <div className="lg:w-1/3">
            <img src="/teampage/2.png" className="lg:h-[260px] lg:w-[361px]" />
          </div>
          <div className="lg:w-1/3">
            <img src="/teampage/3.png" className="lg:h-[260px] lg:w-[361px]" />
          </div>
          <div className="lg:w-1/3">
            <img src="/teampage/4.png" className="lg:h-[260px] lg:w-[361px]" />
          </div>
        </div>
      </div>
    </>
  );
}
