import { Button } from "../../../components/ui/button";
import { Link } from "react-router-dom";
import ColorCircle from "@/components/ColorCircle";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { fetchProducts } from "@/redux/productSlice";
import { useHistory, useLocation, useParams } from "react-router-dom";

export default function FilteredProducts() {
  const history = useHistory();
  const dispatch = useDispatch();
  const location = useLocation();

  const products = useSelector((state) => state.products.productList?.products);
  console.log("products:", products);
  const { sort, filter } = useSelector((state) => state.products);
  const [loading, setLoading] = useState(true);
  const [filterInput, setFilterInput] = useState(filter);
  const [sortValue, setSortValue] = useState(sort || "price:asc");
  const params = new URLSearchParams(location.search);
  const { categoryId } = useParams();
  const [searchQuery, setSearchQuery] = useState("");

  // Handle filter input changes
  const handleFilterChange = (event) => {
    setFilterInput(event.target.value);
    const newParams = new URLSearchParams(location.search);
    newParams.set("filter", event.target.value);
    history.push({ search: newParams.toString() });
  };

  // Handle sort selection changes
  const handleSortChange = (event) => {
    setSortValue(event.target.value);
    const newParams = new URLSearchParams(location.search);
    newParams.set("sort", event.target.value);
    history.push({ search: newParams.toString() });
  };

  // Apply filter and sort
  const handleApplyFilter = () => {
    setSearchQuery(filterInput);
  };

  useEffect(() => {
    setLoading(true);
    console.log("categoryId", categoryId);
    dispatch(
      fetchProducts({
        categoryId,
        sort: sortValue,
        filter: searchQuery,
      }),
    )
      .then(() => {
        setLoading(false);
        console.log("Products fetched:", products); // Veriyi konsolda kontrol edin
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
        setLoading(false);
      });
  }, [categoryId, sortValue, searchQuery]);

  if (loading) {
    return (
      <div className="flex justify-center">
        <div
          className="spinner-border inline-block h-8 w-8 animate-spin rounded-full border-4"
          role="status"
        >
          <span className="sr-only">Loading...</span>
        </div>
      </div>
    );
  }

  return (
    <div className="font-montserrat">
      <div className="flex flex-col items-center justify-center gap-3 lg:mt-10 lg:flex-row lg:justify-around">
        <div className="leading-[24px] tracking-[0.2px] text-[#737373]">
          <p className="text-sm font-semibold">Showing all 12 results</p>
        </div>
        <div className="mt-4 flex gap-3">
          <p className="font-semibold text-[#737373]">Views:</p>
          <Button variant="outline" size="sm">
            <img src="/Vector.png" />
          </Button>
          <Button variant="outline" size="sm">
            <img src="/Vector2.png" />
          </Button>
        </div>
        <div className="m-3 flex gap-2">
          <select
            value={sortValue}
            onChange={handleSortChange}
            className="text-sm text-[#737373]"
          >
            <option value="price:asc">Price: Asc</option>
            <option value="price:desc">Price: Desc</option>
            <option value="rating:asc">Rating: Asc</option>
            <option value="rating:desc">Rating: Desc</option>
          </select>
          <input
            type="text"
            value={filterInput}
            onChange={handleFilterChange}
            placeholder="Filter"
            className="text-sm text-[#737373]"
          />
          <Button
            onClick={handleApplyFilter}
            className="className=text-sm bg-[#23A6F0]"
          >
            Apply
          </Button>
        </div>
      </div>
      {/*Mobile */}
      {products.map((product) => (
        <Link key={product.id} to={`/product/${product.id}`} className="block">
          <div
            key={product.id}
            className="m-10 flex flex-col items-center justify-center gap-3 lg:hidden"
          >
            <img
              src={product.images[0].url}
              alt={product.name}
              className="object-cover"
            />
            <p className="mt-4 text-center text-base font-semibold">
              {product.name}
            </p>
            <p className="p-2 text-justify text-sm font-semibold text-gray-500">
              {product.description}
            </p>
            <div className="mt-2 flex items-center justify-center">
              <p className="mr-2 text-base font-semibold text-[#BDBDBD]">
                {product.price} TL
              </p>
            </div>
            <ColorCircle />
          </div>
        </Link>
      ))}

      {/* Desktop  */}
      <div className="hidden items-center justify-center lg:flex lg:flex-wrap">
        {products.map((product) => (
          <div
            key={product.id}
            className="m-10 w-1/4 flex-col items-center justify-center gap-1"
          >
            <Link key={product.id} to={`/product/${product.id}`}>
              <img
                src={product.images[0].url}
                alt={product.name}
                className="object-cover"
              />
            </Link>
            <p className="mt-4 text-center text-base font-semibold">
              {product.name}
            </p>
            <p className="p-2 text-justify text-sm font-semibold text-gray-500">
              {product.description}
            </p>
            <div className="mt-2 flex items-center justify-center">
              <p className="mr-2 text-base font-semibold text-[#BDBDBD]">
                {product.price} TL
              </p>
            </div>
            <div className="mt-4 flex justify-center space-x-2">
              <ColorCircle />
            </div>
          </div>
        ))}
      </div>
      <div className="m-10 flex items-center justify-center">
        <Button
          variant="outline"
          className="rounded-none rounded-bl-lg rounded-tl-lg text-[#23A6F0] hover:bg-[#F3F3F3] hover:text-[#BDBDBD]"
        >
          First
        </Button>
        <Button
          variant="outline"
          className="rounded-none text-[#23A6F0] hover:bg-[#23A6F0] hover:text-white"
        >
          1
        </Button>
        <Button
          variant="outline"
          className="rounded-none text-[#23A6F0] hover:bg-[#23A6F0] hover:text-white"
        >
          2
        </Button>
        <Button
          variant="outline"
          className="rounded-none text-[#23A6F0] hover:bg-[#23A6F0] hover:text-white"
        >
          3
        </Button>
        <Button
          variant="outline"
          className="rounded-none rounded-br-lg rounded-tr-lg text-[#23A6F0] hover:bg-[#F3F3F3] hover:text-[#BDBDBD]"
        >
          Next
        </Button>
      </div>
    </div>
  );
}
