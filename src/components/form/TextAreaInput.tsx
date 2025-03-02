import { Label } from "../ui/label";
import { Textarea } from "../ui/textarea";

type TextAreaInputProps = {
  name: string;
  labelText?: string;
  defaultValue?: string;
};

const TextAreaInput = (props: TextAreaInputProps) => {
  const { name, labelText, defaultValue } = props;
  return (
    <div className="mb-2">
      <Label htmlFor={name} className="capitalize">
        {labelText || name}
      </Label>
      <Textarea
        id={name}
        name={name}
        defaultValue={defaultValue}
        rows={8}
        required
        className="leading-loose"
        style={{resize:"none"}}
      />
    </div>
  );
};

export default TextAreaInput;
