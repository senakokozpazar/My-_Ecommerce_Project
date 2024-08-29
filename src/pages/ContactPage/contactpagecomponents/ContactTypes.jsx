import { Button } from "@/components/ui/button";

export default function ContactTypes() {
  return (
    <div className="flex flex-col">
      <div>
        <p>VISIT OUR OFFICE</p>
      </div>
      <div>
        <p>We help small businesses with big ideas</p>
      </div>
      <div>
        <img src="/contactimages/icn settings .icn-xl.png" alt="" />
        <p>georgia.young@example.com</p>
        <p>georgia.young@ple.com</p>
        <p>Get Support</p>
        <Button>Submit Request</Button>
      </div>
    </div>
  );
}
