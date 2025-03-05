import { Separator } from "../ui/separator";

export const SectionTitle = ({ text }: { text: string }) => {
  return (
    <div className="mt-5">
      <h2 className="section-title">{text}</h2>
      <Separator />
    </div>
  );
};
