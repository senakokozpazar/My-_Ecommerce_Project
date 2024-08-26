import { Button } from "@/components/ui/button";

export default function Footer() {
  const infoSections = [
    {
      id: 1,
      title: "Company Info",
      links: ["About Us", "Carrier", "We are hiring", "Blog"],
    },
    {
      id: 2,
      title: "Legal",
      links: ["About Us", "Carrier", "We are hiring", "Blog"],
    },
    {
      id: 3,
      title: "Features",
      links: [
        "Business Marketing",
        "User Analytic",
        "Live Chat",
        "Unlimited Support",
      ],
    },
    {
      id: 4,
      title: "Resources",
      links: ["IOS & Android", "Watch a Demo", "Customers", "API"],
    },
  ];
  return (
    <div className="mx-5 flex flex-col items-center font-montserrat lg:mx-0">
      <div className="mt-52 flex w-full flex-col bg-[#FAFAFA] lg:mx-0 lg:flex-row lg:justify-between lg:px-0">
        <img
          src="navbar-brand.png"
          className="m-5 h-[58px] w-[187px] lg:ml-28"
        />
        <div className="m-5 flex justify-start gap-5 lg:items-center lg:justify-center">
          <img
            src="/footer/facebook.png"
            className="lg:h-[24px] lg:w-[24px]"
          ></img>
          <img
            src="/footer/ant-design_instagram-outlined.png"
            className="lg:h-[24px] lg:w-[24px]"
          ></img>
          <img
            src="/footer/ant-design_twitter-outlined.png"
            className="lg:h-[24px] lg:w-[24px]"
          ></img>
        </div>
      </div>

      <div className="flex flex-wrap justify-start lg:flex-nowrap lg:gap-20">
        {infoSections.map((section) => (
          <div key={section.id} className="mt-20 flex w-full flex-col">
            <p className="mb-10 text-left text-base font-semibold leading-[24px] tracking-[0.1px] text-[#252B42]">
              {section.title}
            </p>
            {section.links.map((link, index) => (
              <a
                key={index}
                className="my-3 text-left text-sm font-semibold text-[#737373]"
              >
                {link}
              </a>
            ))}
          </div>
        ))}
        <div className="flex flex-col">
          <p className="mb-10 mt-20 text-left text-base font-semibold leading-[24px] tracking-[0.1px] text-[#252B42]">
            Get In Touch
          </p>
          <div className="flex">
            <input
              type="email"
              placeholder="Your Email"
              className="h-[58px] bg-[#E6E6E6] p-2 text-sm text-[#737373]"
            />
            <Button className="h-[58px] rounded-none bg-[#23A6F0] text-white">
              Subscribe
            </Button>
          </div>
          <p className="my-2 text-left text-xs text-[#737373]">
            Lore imp sum dolor Amit
          </p>
        </div>
      </div>
      <div className="w-full items-center justify-center bg-[#FAFAFA] lg:mx-0">
        <p className="tex-[#252B42] m-5 max-w-xs items-center text-center text-sm font-semibold lg:ml-28 lg:max-w-lg lg:text-left">
          Made with love by Finland All Right Reserved
        </p>
      </div>
    </div>
  );
}
