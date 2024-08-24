export default function Header() {
  return (
    <>
      {/*Desktop Header */}

      <div className="sticky top-0 z-10 m-0 hidden flex-col p-0 lg:block">
        <div className="flex h-[46px] items-center justify-between bg-[#252B42] text-sm font-semibold leading-[24px] tracking-[0.2px] text-white">
          <div className="flex gap-5">
            <div>
              <i className="fa-solid fa-phone p-2 text-white"></i>
              <span>(225) 555-0118</span>
            </div>
            <div>
              <i class="fa-regular fa-envelope p-2 text-white"></i>
              <span>michelle.rivera@example.com</span>
            </div>
          </div>
          <div>
            <p>Follow Us and get a chance to win ½80 off</p>
          </div>
          <div className="m-3 flex gap-3">
            <p>Follow Us : </p>
            <img src="/navbaricons/a.png" alt="instagram" />
            <img src="/navbaricons/icn settings icn-xs.png" alt="youtube" />
            <img src="/navbaricons/facebook.png" alt="facebook" />
            <img src="/navbaricons/twitter.png" alt="twitter" />
          </div>
        </div>
        <div className="sticky z-10 flex h-[58px] items-center justify-between bg-white text-sm font-semibold leading-[24px] tracking-[0.2px]">
          <div className="flex gap-5">
            <img src="/navbar-brand.png" className="p-2" />
            <ul className="flex items-center gap-5 text-[#737373]">
              <li>Home</li>
              <li className="font-normal">Shop</li>
              <li>About</li>
              <li>Blog</li>
              <li>Contact</li>
              <li>Pages</li>
            </ul>
          </div>
          <div className="m-2 flex items-center gap-2 text-[#23A6F0]">
            <i className="fa-regular fa-user p-2"></i>
            <p>Login / Register</p>
            <i class="fa-solid fa-magnifying-glass"></i>
            <i class="fa-solid fa-cart-shopping"></i>
            <span className="font-normal">1</span>
            <i class="fa-regular fa-heart"></i>
            <span className="font-normal">1</span>
          </div>
        </div>
      </div>

      {/*Mobile Header */}
      <div className="mx-5 font-montserrat lg:hidden">
        <div className="flex justify-between">
          <img src="/navbar-brand.png" />

          <div>
            <i class="fa-solid fa-magnifying-glass p-7"></i>
            <i class="fa-solid fa-cart-shopping p-7"></i>
            <i class="fa-solid fa-bars p-7"></i>
          </div>
        </div>

        <div className="font-2xl m-10 flex justify-center p-5 text-center text-xl font-normal leading-[45px] tracking-[0.2px]">
          <ul className="text-[#737373]">
            <li>Home</li>
            <li className="font-semibold">Product</li>
            <li className="font-semibold">Pricing</li>
            <li className="font-semibold">Contact</li>
          </ul>
        </div>
      </div>
    </>
  );
}
