export default function Blog() {
  const blogItems = [
    {
      id: 1,
      image: "/blog/unsplash_gEZkP23pLZ4.png",
      title: "Loudest a la Madison #1 (L'integral)",
      date: "22 April 2021",
      comments: "10 comments",
    },
    {
      id: 2,
      image: "/blog/unsplash_CuEvrPd3NYc.png",
      title: "Loudest a la Madison #2 (L'integral)",
      date: "22 April 2021",
      comments: "10 comments",
    },
    {
      id: 3,
      image: "/blog/unsplash_k0rVudBoB4c.png",
      title: "Loudest a la Madison #3 (L'integral)",
      date: "22 April 2021",
      comments: "10 comments",
    },
    {
      id: 4,
      image: "/blog/yol.png",
      title: "Loudest a la Madison #1 (L'integral)",
      date: "22 April 2021",
      comments: "10 comments",
    },
    {
      id: 5,
      image: "/blog/araba.png",
      title: "Loudest a la Madison #2 (L'integral)",
      date: "22 April 2021",
      comments: "10 comments",
    },
    {
      id: 6,
      image: "/blog/semsiye.png",
      title: "Loudest a la Madison #3 (L'integral)",
      date: "22 April 2021",
      comments: "10 comments",
    },
  ];

  return (
    <div className="mx-5 flex flex-col items-center font-montserrat">
      <p className="mt-36 text-sm font-semibold text-[#23A6F0] lg:items-center lg:justify-center lg:text-center">
        Practice Advice
      </p>
      <h3 className="mt-5 text-center text-4xl font-semibold leading-[50px] tracking-[0.2] lg:hidden">
        Featured <br />
        Products
      </h3>
      <h3 className="mt-5 hidden text-center text-4xl font-semibold leading-[50px] tracking-[0.2] lg:block">
        Featured Posts
      </h3>
      <p className="mt-5 text-center text-sm font-light leading-[20px] tracking-[0.2px] text-[#737373] lg:hidden">
        Problems trying to resolve <br /> the conflict between
      </p>
      <p className="mt-5 hidden text-center text-sm font-light leading-[20px] tracking-[0.2px] text-[#737373] lg:block lg:max-w-lg">
        Problems trying to resolve the conflict between the two major realms of
        Classical pyhsics: Newtonian mechanics
      </p>

      {blogItems.slice(0, 3).map((item) => (
        <div key={item.id} className="relative mt-10 lg:hidden">
          <img src={item.image} className="w-full" alt={item.title} />
          <div className="absolute left-2 top-2 rounded-sm bg-[#E74040] px-2 py-1 font-semibold text-white">
            NEW
          </div>
          <div className="rounded-md p-4 shadow-md">
            <div className="my-5 flex items-start justify-start gap-4 text-left">
              <p className="text-left text-xs text-[#8EC2F2]">Google</p>
              <p className="text-xs text-[#737373]">Trending</p>
              <p className="text-xs text-[#737373]">New</p>
            </div>
            <p className="justify-start text-left text-xl leading-[30px] text-[#252B42]">
              {item.title}
            </p>
            <p className="mt-5 justify-start text-left text-sm leading-[30px] text-[#737373]">
              We focus on ergonomics and meeting <br /> you where you work. It's
              only a <br />
              keystroke away.
            </p>
            <div className="my-5 flex justify-between">
              <div className="flex">
                <i className="fa-regular fa-clock mr-2 text-[#23A6F0]" />
                <p className="text-xs leading-[16px] text-[#737373]">
                  {item.date}
                </p>
              </div>

              <div className="flex">
                <i className="fa-solid fa-chart-area mr-2 text-[#23856D]"></i>
                <p className="text-xs leading-[16px] text-[#737373]">
                  {item.comments}
                </p>
              </div>
            </div>
            <div className="flex items-center">
              <a className="text-left text-sm font-semibold leading-[24px] text-[#737373]">
                Learn More
              </a>
              <i className="fa-solid fa-chevron-right ml-2 text-[#23A6F0]"></i>
            </div>
          </div>
        </div>
      ))}
      <div className="hidden lg:flex lg:gap-5">
        {blogItems.slice(3).map((item) => (
          <div key={item.id} className="relative mt-10">
            <img src={item.image} className="w-full" alt={item.title} />
            <div className="absolute left-2 top-2 rounded-sm bg-[#E74040] px-2 py-1 font-semibold text-white">
              NEW
            </div>
            <div className="rounded-md p-4 shadow-md">
              <div className="my-5 flex items-start justify-start gap-4 text-left">
                <p className="text-left text-xs text-[#8EC2F2]">Google</p>
                <p className="text-xs text-[#737373]">Trending</p>
                <p className="text-xs text-[#737373]">New</p>
              </div>
              <p className="justify-start text-left text-xl leading-[30px] text-[#252B42]">
                {item.title}
              </p>
              <p className="mt-5 justify-start text-left text-sm leading-[30px] text-[#737373]">
                We focus on ergonomics and meeting <br /> you where you work.
                It's only a <br />
                keystroke away.
              </p>
              <div className="my-5 flex justify-between">
                <div className="flex">
                  <i className="fa-regular fa-clock mr-2 text-[#23A6F0]" />
                  <p className="text-xs leading-[16px] text-[#737373]">
                    {item.date}
                  </p>
                </div>

                <div className="flex">
                  <i className="fa-solid fa-chart-area mr-2 text-[#23856D]"></i>
                  <p className="text-xs leading-[16px] text-[#737373]">
                    {item.comments}
                  </p>
                </div>
              </div>
              <div className="flex items-center">
                <a className="text-left text-sm font-semibold leading-[24px] text-[#737373]">
                  Learn More
                </a>
                <i className="fa-solid fa-chevron-right ml-2 text-[#23A6F0]"></i>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
