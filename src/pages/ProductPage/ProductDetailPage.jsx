import BreadCrumb from "@/components/breadcrumb";
import DetailCarousel from "@/pages/ProductPage/productpagecomponents/detailcarousel";
import ProductDetails from "./productpagecomponents/ProductDetails";

export default function ProductDetailPage() {
  return (
    <div>
      <BreadCrumb />
      <DetailCarousel />
      <ProductDetails />
    </div>
  );
}
