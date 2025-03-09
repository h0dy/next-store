import { fetchProductRating } from "@/utils/actions";
import { Star } from "lucide-react";

const ProductRating = async ({ productId }: { productId: string }) => {
  const { count, rating } = await fetchProductRating(productId);

  const className = `flex gap-1 items-center text-md mt-1 mb-4`;
  const countValue = ` (${count}) reviews`;

  return (
    <span className={className}>
      <Star fill="black" size="14" />
      {rating}
      {countValue}
    </span>
  );
};

export default ProductRating;
