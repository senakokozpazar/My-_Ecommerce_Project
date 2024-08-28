import BreadCrumb from "@/components/breadcrumb";
import DetailCarousel from "@/pages/ProductPage/productpagecomponents/detailcarousel";
import ProductDetails from "./productpagecomponents/ProductDetails";
import ProductActions from "./productpagecomponents/ProductActions";
import ProductNavbar from "./productpagecomponents/ProductNavbar";
import Detail from "./productpagecomponents/Detail";
import BestSellerProducts from "./BestSellerProducts";
import Brands from "../ShopPage/shoppagecomponents/Brands";

export default function ProductDetailPage() {
  return (
    <div className="font-montserrat">
      <div className="bg-[#FAFAFA]">
        {" "}
        <BreadCrumb />
        <DetailCarousel />
        <ProductDetails />
        <ProductActions />
      </div>
      <ProductNavbar />
      <Detail />
      <BestSellerProducts />
      <Brands />
    </div>
  );
}
