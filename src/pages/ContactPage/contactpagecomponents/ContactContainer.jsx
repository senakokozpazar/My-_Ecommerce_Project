export default function ContactContainer() {
  return (
    <div>
      <div>
        <p>CONTACT US</p>
      </div>
      <div>
        <p>Get in touch today!</p>
      </div>
      <div>
        <p>
          We know how large objects will act, but things on a small scale just
          do not act that way.
        </p>
      </div>
      <div>
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
