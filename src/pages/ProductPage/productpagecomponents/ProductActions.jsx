import { Button } from "@/components/ui/button";

export default function ProductActions() {
  return (
    <div className="flex gap-3 p-10 font-montserrat">
      <Button size="lg" className="bg-[#23A6F0] text-sm text-white">
        Select Options
      </Button>
      <Button size="icon" className="rounded-full bg-white">
        <i class="fa-regular fa-heart text-black"></i>
      </Button>
      <Button size="icon" className="rounded-full bg-white">
        <i className="fa-solid fa-cart-shopping text-black"></i>
      </Button>
      <Button size="icon" className="rounded-full bg-white">
        <i className="fa-solid fa-eye text-black"></i>
      </Button>
    </div>
  );
}
