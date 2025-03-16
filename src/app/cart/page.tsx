import { SectionTitle } from "@/components/global/SectionTitle";
import { fetchOrCreateCart, updateCart } from "@/utils/actions";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import CartItemList from "@/components/cart/CartItemList";
import CartTotals from "@/components/cart/CartTotals";

const CartPage = async () => {
  const { userId } = auth();
  if (!userId) redirect("/");
  const previousCart = await fetchOrCreateCart({ userId });

  const { currentCart, cartItems } = await updateCart(previousCart);

  if (currentCart.numItemsInCart === 0)
    return <SectionTitle text="Empty Cart" />;

  return (
    <>
      <SectionTitle text="Shopping Cart" />
      <div className="mt-8 grid gap-4 lg:grid-cols-12">
        <div className="lg:col-span-8">
          <CartItemList cartItems={cartItems} />
        </div>
        <div className="lg:col-span-4">
          <CartTotals cart={currentCart} />
        </div>
      </div>
    </>
  );
};

export default CartPage;
