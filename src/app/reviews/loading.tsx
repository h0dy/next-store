import { SectionTitle } from "@/components/global/SectionTitle";
import { CardHeader, Card } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

const loading = () => {
  return (
    <>
      <SectionTitle text="Your Reviews" />
      <section className="grid md:grid-cols-2 gap-8 mt-4">
        <ReviewLoadingCard />
        <ReviewLoadingCard />
      </section>
    </>
  );
};

const ReviewLoadingCard = () => {
  return (
    <Card>
      <CardHeader>
        <div className="flex items-center">
          <Skeleton className="size-12 rounded-full" />
          <div className="ml-4">
            <Skeleton className="w-[150px] h-4 mb-2" />
            <Skeleton className="w-[150px] h-4 mb-2" />
          </div>
        </div>
      </CardHeader>
    </Card>
  );
};

export default loading;
