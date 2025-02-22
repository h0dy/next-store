import { fetchFeaturedProducts } from "@/utils/action";
import EmptyList from "../global/EmptyList";
import ProductsGrid from "../products/ProductsGrid";

const FeaturedProducts = async () => {
  const products = await fetchFeaturedProducts();
  if (!products.length) return <EmptyList />;
  return (
    <section className="">
      <ProductsGrid products={products} />
    </section>
  );
};

export default FeaturedProducts;
