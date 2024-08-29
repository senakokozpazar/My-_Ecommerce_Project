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
        <div className="flex flex-col lg:flex-row">
          <DetailCarousel />
          <div>
            <ProductDetails />
            <ProductActions />
          </div>
        </div>
      </div>
      <div className="lg:bg-striped lg:flex-col lg:gap-5">
        <ProductNavbar />
        <Detail />
      </div>

      <BestSellerProducts />
      <Brands />
    </div>
  );
}
