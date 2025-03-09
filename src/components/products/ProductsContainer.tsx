import { fetchAllProducts } from "@/utils/actions";
import { Separator } from "../ui/separator";
import ProductsGrid from "./ProductsGrid";
import ProductsList from "./ProductsList";
import Link from "next/link";
import { Button } from "../ui/button";
import { LayoutGrid, List } from "lucide-react";
import { Suspense } from "react";
import LoadingContainer from "../global/LoadingContainer";

const ProductsContainer = async ({
  layout,
  search,
}: {
  layout: string;
  search: string;
}) => {
  const products = await fetchAllProducts({ search });

  const searchTerm = search ? `&search=${search}` : "";
  return (
    <>
      {/* HEADER */}
      <section>
        <div className="products-header">
          <h4 className="font-medium text-lg">
            {products.length} Product{products.length > 1 && "s"}
          </h4>

          <div className="flex gap-x-4">
            <Button
              size="icon"
              asChild
              variant={layout === "grid" ? "default" : "ghost"}
            >
              <Link href={`/products?layout=grid${searchTerm}`}>
                <LayoutGrid size={32} />
              </Link>
            </Button>

            <Button
              size="icon"
              asChild
              variant={layout === "list" ? "default" : "ghost"}
            >
              <Link href={`/products?layout=list${searchTerm}`}>
                <List size={32} />
              </Link>
            </Button>
          </div>
        </div>
        <Separator className="mt-4"></Separator>
      </section>

      {/* PRODUCTS */}
      <Suspense fallback={<LoadingContainer />}>
        <div className="">
          {!products.length ? (
            <h5 className="text-2xl mt-16 capitalize">
              sorry, no products matched your search
            </h5>
          ) : layout === "grid" ? (
            <ProductsGrid products={products} />
          ) : (
            <ProductsList products={products} />
          )}
        </div>
      </Suspense>
    </>
  );
};

export default ProductsContainer;
