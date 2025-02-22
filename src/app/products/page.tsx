import ProductsContainer from "@/components/products/ProductsContainer";

const ProductsPage = async ({
  searchParams,
}: {
  searchParams: Promise<{ search?: string; layout?: string }>;
}) => {
  const { search = "", layout = "grid" } = await searchParams;
  return <ProductsContainer search={search} layout={layout} />;
};

export default ProductsPage;
