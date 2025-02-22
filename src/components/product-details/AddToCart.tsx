import { Button } from "../ui/button";

const AddToCart = ({ productId }: { productId: string }) => {
  // temp
  console.log(productId);
  return (
    <Button className="capitalize mt-8 " size="lg">
      add to cart
    </Button>
  );
};

export default AddToCart;
