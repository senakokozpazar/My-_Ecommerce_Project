import { Button } from "@/components/ui/button";
import TeamCards from "@/pages/TeamPage/teampagecomponents/TeamCards";

export default function AboutUsContainer() {
  return (
    <div className="flex flex-col items-center justify-center font-montserrat">
      <p className="text[40px] font-semibold leading-[50px] tracking-[0.2]">
        ABOUT US
      </p>
      <p className="max-w-80 p-10 text-center">
        We know how large objects will act, but things on a small scale just do
        not act that way.
      </p>
      <Button size="lg" className="m-10 bg-[#23A6F0] text-white">
        Get Quote Now
      </Button>
      <div className="m-3 mb-20 flex items-center justify-center p-5">
        <img src="/aboutus.png" />
      </div>
      <p className="m-5 text-sm text-[#E74040]">Problems trying</p>
      <p className="max-w-80 p-10 text-center text-2xl font-semibold">
        Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.
      </p>
      <p className="m-5 max-w-80 p-10 text-center text-sm font-light">
        Problems trying to resolve the conflict between the two major realms of
        Classical physics: Newtonian mechanics{" "}
      </p>
      <div className="m-3 flex flex-col items-center justify-center gap-10 p-5">
        <div className="p-5">
          {" "}
          <p className="mb-3 text-center text-[58px] font-semibold leading-[80px] tracking-[0.2]">
            15K
          </p>
          <p className="text-base font-semibold">Happy Customers</p>
        </div>
        <div className="p-5">
          {" "}
          <p className="mb-3 text-center text-[58px] font-semibold leading-[80px] tracking-[0.2]">
            150K
          </p>
          <p className="text-base font-semibold">Monthly Visitors</p>
        </div>
        <div className="p-5">
          {" "}
          <p className="mb-3 text-center text-[58px] font-semibold leading-[80px] tracking-[0.2]">
            15
          </p>
          <p className="text-base font-semibold">Countries Worldwide</p>
        </div>
        <div className="p-5">
          {" "}
          <p className="mb-3 text-center text-[58px] font-semibold leading-[80px] tracking-[0.2]">
            100+
          </p>
          <p className="text-base font-semibold">Top Partners</p>
        </div>
      </div>
      <div className="relative mb-10">
        <img src="/media bg-cover.png" className="rounded-lg" />
        <button className="absolute left-1/2 top-1/2 flex h-10 w-10 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-[#23A6F0] p-3">
          <i className="fa-solid fa-play text-white"></i>
        </button>
      </div>
      <div className="mt-20 flex flex-col items-center justify-center font-montserrat font-semibold">
        <p className="m-5 w-1/2 text-center text-[40px] leading-[50px] text-[#252B42]">
          Meet Our Team
        </p>
        <div className="lg:flex">
          {" "}
          <TeamCards
            username="Erhan Fırat"
            image="/teampage/1708951317641.jpeg"
            profession="Project Owner"
          />
          <TeamCards
            username="Gökhan Özdemir"
            image="/teampage/1635783306921.jpeg"
            profession="Scrum Master "
          />
          <TeamCards
            username="Sena Kokoz Pazar"
            image="/teampage/me.jpeg"
            profession="Full Stack Developer"
          />
        </div>
      </div>
    </div>
  );
}
