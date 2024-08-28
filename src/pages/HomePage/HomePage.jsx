import Blog from "@/pages/HomePage/homepagecomponents/Blog";
import EditorsPick from "@/pages/HomePage/homepagecomponents/EditorsPick";
import Carousel1 from "@/pages/HomePage/homepagecomponents/Carousel1";
import BestSellers from "@/pages/HomePage/homepagecomponents/BestSellers";
import Carousel2 from "@/pages/HomePage/homepagecomponents/Carousel2";
import Container from "@/pages/HomePage/homepagecomponents/Container";

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
