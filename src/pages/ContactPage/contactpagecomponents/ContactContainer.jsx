export default function ContactContainer() {
  return (
    <div className="flex flex-col items-center justify-center text-[#252B42]">
      <div>
        <p className="mb-10 text-base font-semibold">CONTACT US</p>
      </div>
      <div>
        <p className="p-5 text-center text-[40px] font-semibold leading-[50px]">
          Get in touch today!
        </p>
      </div>
      <div>
        <p className="p-10 text-center">
          We know how large objects will act, but things on a small scale just
          do not act that way.
        </p>
      </div>
      <div className="flex flex-col items-center justify-center gap-2 text-2xl font-semibold">
        <p>Phone: +451 215 215</p>
        <p>Fax: +451 215 215</p>
      </div>
      <div className="my-10 flex justify-around gap-3 p-5">
        <img src="/contactimages/logos_twitter.png" alt="twitter_logo" />
        <img src="/contactimages/logos_facebook.png" alt="facebook_logo" />
        <img
          src="/contactimages/ant-design_instagram-outlined.png"
          alt="instagram_logo"
        />
        <img src="/contactimages/logos_linkedin-icon.png" alt="linkedin_logo" />
      </div>
      <div className="mt-10 p-5">
        <img src="/contactimages/none.png" alt="family_photo" />
      </div>
    </div>
  );
}
