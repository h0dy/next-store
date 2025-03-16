import BreadCrumbs from "@/components/product-details/BreadCrumbs";
import { fetchSingleProduct, findExistingReview } from "@/utils/actions";
import { formatCurrency } from "@/utils/format";
import Image from "next/image";
import FavoriteToggleButton from "../../../components/products/FavoriteToggleButton";
import ProductRating from "@/components/product-details/ProductRating";
import AddToCart from "@/components/product-details/AddToCart";
import ProductReviews from "@/components/reviews/ProductReviews";
import SubmitReview from "@/components/reviews/SubmitReview";
import { auth } from "@clerk/nextjs/server";

const SinglePageProduct = async ({
  params,
}: {
  params: Promise<{ id: string }>;
}) => {
  const productId = (await params).id;

  const { name, image, company, price, description } = await fetchSingleProduct(
    {
      id: productId,
    }
  );

  const { userId } = auth();
  const reviewDoesNotExist =
    userId && !(await findExistingReview(userId, productId));

  const riyalAmount = formatCurrency(price);
  return (
    <section>
      <BreadCrumbs name={name} />

      <div className="mt-6 grid gap-y-8 lg:grid-cols-2 lg:gap-x-16">
        {/* Image first col */}
        <div className="relative h-96">
          <Image
            src={image}
            alt={name}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            priority
            className="w-full rounded object-cover"
          />
        </div>

        {/* product second col */}
        <div className="">
          <div className="flex gap-x-8 items-center">
            <h1 className="capitalize text-3xl font-bold">{name}</h1>
            <FavoriteToggleButton productId={productId} />
          </div>
          <ProductRating productId={productId} />
          <h4 className="text-xl mt-2">{company}</h4>
          <p className="mt-3 text-md bg-muted inline-block p-2 rounded">
            {riyalAmount}
          </p>
          <p className="mt-6 leading-8 text-muted-foreground">{description}</p>
          <AddToCart productId={productId} />
        </div>
      </div>

      <ProductReviews productId={productId} />
      {reviewDoesNotExist && <SubmitReview productId={productId} />}
    </section>
  );
};

export default SinglePageProduct;
