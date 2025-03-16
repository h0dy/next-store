"use client";

import { useState } from "react";
import SelectProductAmount, {
  Mode,
} from "../product-details/SelectProductAmount";
import FormContainer from "../form/FormContainer";
import { removeCartItemAction, updateCartItemAction } from "@/utils/actions";
import { SubmitButton } from "../form/Buttons";
import { useToast } from "@/hooks/use-toast";

const ThirdColumn = ({ quantity, id }: { quantity: number; id: string }) => {
  const [amount, setAmount] = useState(quantity);

  const [isLoading, setIsLoading] = useState(false);

  const { toast } = useToast();

  const handleAmountChange = async (value: number) => {
    setIsLoading(true);
    toast({ description: "Updating amount..." });
    const result = await updateCartItemAction({
      amount: value,
      cartItemId: id,
    });

    setAmount(value);
    toast({ description: result.message });
    setIsLoading(false);
  };

  return (
    <div className="mb:ml-8">
      <SelectProductAmount
        amount={amount}
        setAmount={handleAmountChange}
        mode={Mode.CartItem}
        isLoading={isLoading}
      />
      <FormContainer action={removeCartItemAction}>
        <input type="hidden" name="id" value={id} />
        <SubmitButton size="sm" className="mt-4" text="remove" />
      </FormContainer>
    </div>
  );
};

export default ThirdColumn;
