import Link from "next/link";
import { Button } from "../ui/button";
import { FiShoppingBag } from "react-icons/fi";

const CartButton = async () => {
  const numItemInCart = 9;

  return (
    <Button
      asChild
      variant="outline"
      size="icon"
      className="flex justify-center items-center relative"
    >
      <Link className="size-6" href="/cart">
        <FiShoppingBag />
        <span className="cart-items-num">{numItemInCart}</span>
      </Link>
    </Button>
  );
};

export default CartButton;
