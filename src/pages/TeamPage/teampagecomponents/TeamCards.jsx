const TeamCards = ({ username, profession, image }) => {
  return (
    <div className="flex flex-col items-center justify-center p-5">
      <img
        src={image}
        alt={username}
        height="231px"
        width="329px"
        className="m-3"
      />
      <p className="m-3 text-base">{username}</p>
      <p className="m-3 text-sm">{profession}</p>
      <div className="m-2 flex items-center justify-center gap-3">
        <img src="/teampage/face.png" alt="Facebook" />
        <img src="/teampage/inst.png" alt="Instagram" />
        <img src="/teampage/twitter.png" alt="Twitter" />
      </div>
    </div>
  );
};

export default TeamCards;
