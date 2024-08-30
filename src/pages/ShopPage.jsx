import Brands from "@/components/Brands";
import FilteredProducts from "@/components/FilteredProducts";
import ShopContainer from "@/components/ShopContainer";

export default function ShopPage() {
  return (
    <div>
      <ShopContainer />
      <FilteredProducts />
      <Brands />
    </div>
  );
}
