import { Button } from "@/components/ui/button";

const ContactCard = ({ bgColor, textColor, imgSrc }) => {
  return (
    <div
      className={`m-5 flex flex-col items-center justify-center gap-5 p-10 text-sm font-semibold ${bgColor} ${textColor} shadow-md`}
    >
      <img src={imgSrc} />
      <p>georgia.young@example.com</p>
      <p>georgia.young@ple.com</p>
      <p>Get Support</p>
      <Button
        className="border-[#23A6F0] !bg-white !text-[#23A6F0]"
        size="lg"
        variant="outline"
      >
        Submit Request
      </Button>
    </div>
  );
};
export default ContactCard;
