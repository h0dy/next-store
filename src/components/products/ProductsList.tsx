import { formatCurrency } from "@/utils/format";
import { Product } from "@prisma/client";
import Link from "next/link";
import { Card, CardContent } from "../ui/card";
import Image from "next/image";
import FavoriteToggleButton from "./FavoriteToggleButton";

const ProductsList = ({ products }: { products: Product[] }) => {
  return (
    <div className="mt-16 grid gap-y-8">
      {products.map((product) => {
        const { name, price, image, company, id } = product;
        const riyalAmount = formatCurrency(price);
        return (
          <article key={id} className="groupe relative">
            <Link href={`products/${id}`}>
              <Card className="transform transition-shadow duration-500 group-hover:shadow-xl ">
                <CardContent className="p-8 gap-y-4 grid md:grid-cols-3">
                  <div className="relative h-64 md:h-48 md:w-48">
                    <Image
                      src={image}
                      alt={name}
                      fill
                      sizes="(max-width:768px) 100vw, (max-width:1200px) 50vw, 33vw"
                      priority
                      className="w-full rounded object-cover group-hover:scale-105"
                    />
                  </div>
                  <div className="">
                    <h2 className="text-xl font-semibold capitalize">{name}</h2>
                    <h4 className="text-muted-foreground">{company}</h4>
                  </div>
                  <p className="text-muted-foreground text-lg md:ml-auto">
                    {riyalAmount}
                  </p>
                </CardContent>
              </Card>
            </Link>
            <div className="absolute bottom-8 right-8 z-5">
              <FavoriteToggleButton productId={id} />
            </div>
          </article>
        );
      })}
    </div>
  );
};

export default ProductsList;
