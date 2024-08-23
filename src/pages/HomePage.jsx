import Blog from "@/components/Blog";
import EditorsPick from "@/components/EditorsPick";
import Carousel1 from "@/components/Carousel1";
import BestSellers from "@/components/BestSellers";
import Carousel2 from "@/components/Carousel2";
import Container from "@/components/Container";

export default function HomePage() {
  return (
    <div>
      <Carousel1 />
      <EditorsPick />
      <BestSellers />
      <Carousel2 />
      <Container />
      <Blog />
    </div>
  );
}
