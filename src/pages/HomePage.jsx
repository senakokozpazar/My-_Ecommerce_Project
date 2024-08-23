import Blog from "@/components/Blog";
import EditorsPick from "@/components/EditorsPick";
import Carousel1 from "@/components/Carousel1";
import BestSellers from "@/components/BestSellers";

export default function HomePage() {
  return (
    <div>
      <Carousel1 />
      <EditorsPick />
      <BestSellers />
      <Blog />
    </div>
  );
}
