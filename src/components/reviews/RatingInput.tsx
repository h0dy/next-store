import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const RatingInput = ({
  name,
  labelText,
}: {
  name: string;
  labelText?: string;
}) => {
  const numbers = Array.from({ length: 5 }, (_, idx) => {
    return (idx + 1).toString();
  }).reverse();

  return (
    <div className="mb-2 max-w-xs">
      <Select defaultValue={numbers[0]} name={name} required>
        <SelectTrigger>
          <SelectValue placeholder="Rating"></SelectValue>
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>{labelText || name}</SelectLabel>
            {numbers.map((number) => {
              return (
                <SelectItem key={number} value={number}>
                  {number}
                </SelectItem>
              );
            })}
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
};

export default RatingInput;
