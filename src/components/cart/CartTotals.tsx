import { formatCurrency } from "@/utils/format";
import { Cart } from "@prisma/client";
import { Separator } from "@/components/ui/separator";
import React from "react";
import { Card, CardTitle } from "../ui/card";
import FormContainer from "../form/FormContainer";
import { createOrderAction } from "@/utils/actions";
import { SubmitButton } from "../form/Buttons";

const CartTotals = ({ cart }: { cart: Cart }) => {
  const { cartTotal, shipping, tax, orderTotal } = cart;
  return (
    <div>
      <Card className="p-8">
        <CartTotalRow label="subtotal" amount={cartTotal} />
        <CartTotalRow label="shipping" amount={shipping} />
        <CartTotalRow label="tax" amount={tax} />
        <CardTitle>
          <CartTotalRow label="Order Total" amount={orderTotal} lastRow />
        </CardTitle>
      </Card>
      <FormContainer action={createOrderAction}>
        <SubmitButton text="Place Order" className="w-full mt-8" />
      </FormContainer>
    </div>
  );
};

const CartTotalRow = ({
  label,
  amount,
  lastRow,
}: {
  label: string;
  amount: number;
  lastRow?: boolean;
}) => {
  return (
    <>
      <p className="flex justify-between text-sm">
        <span className="capitalize">{label}</span>
        <span>{formatCurrency(amount)}</span>
      </p>
      {lastRow ? null : <Separator className="my-2" />}
    </>
  );
};

export default CartTotals;
