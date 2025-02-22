import { Star } from "lucide-react";

const ProductRating = ({ productId }: { productId: string }) => {
  // temp
  console.log(productId);
  const rating = 4.2;
  const count = 25;
  const className = `flex gap-1 items-center text-md mt-1 mb-4`;
  const countValue = `(${count}) reviews`;
  return (
    <span className={className}>
      <Star />
      {rating}
      {countValue}
    </span>
  );
};

export default ProductRating;
