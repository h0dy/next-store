import { Separator } from "../ui/separator";

export const SectionTitle = ({ text }: { text: string }) => {
  return (
    <div>
      <h2 className="section-title">{text}</h2>
      <Separator />
    </div>
  );
};
