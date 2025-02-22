import { formatCurrency } from "@/utils/format";
import { Product } from "@prisma/client";
import Link from "next/link";
import { Card, CardContent } from "../ui/card";
import Image from "next/image";
import FavoriteToggleButton from "./FavoriteToggleButton";

const ProductsGrid = ({ products }: { products: Product[] }) => {
  return (
    <div className="products-grid">
      {products.map((product: Product) => {
        const { name, price, image, id } = product;
        const riyalAmount = formatCurrency(price);
        return (
          <article key={id} className="group relative">
            <Link href={`/products/${id}`}>
              <Card className="product-card">
                <CardContent className="p-4">
                  <div className="relative h-80 md:h-48 rounded overflow-hidden">
                    <Image
                      src={image}
                      alt={name}
                      fill
                      sizes="(max-width:768px) 100vw, (max-width:1200px) 50vw, 33vw"
                      priority
                      className="card-product-img"
                    />
                  </div>
                  <div className="mt-2 text-center">
                    <h2 className="text-lg capitalize">{name}</h2>
                    <p className="text-muted-foreground">{riyalAmount}</p>
                  </div>
                </CardContent>
              </Card>
            </Link>
            <div className="absolute top-7 right-7 z-5">
              <FavoriteToggleButton productId={id} />
            </div>
          </article>
        );
      })}
    </div>
  );
};
export default ProductsGrid;
