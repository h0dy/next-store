"use client";

import { Checkbox } from "../ui/checkbox";

type CheckboxInputProps = {
  name: string;
  label: string;
  defaultChecked?: boolean;
};

const CheckboxInput = (props: CheckboxInputProps) => {
  const { name, label, defaultChecked = false } = props;
  return (
    <div className="flex items-center space-x-2">
      <Checkbox id={name} name={name} defaultChecked={defaultChecked} />
      <label
        htmlFor={name}
        className="text-sm leading-none capitalize peer-disabled:cursor-not-allowed"
      >
        {label}
      </label>
    </div>
  );
};

export default CheckboxInput;
