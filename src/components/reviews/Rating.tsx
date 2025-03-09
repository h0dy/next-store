import { Star } from "lucide-react";
// import { FaRegStar, FaStar } from "react-icons/fa";

const Rating = ({ rating }: { rating: number }) => {
  const stars = Array.from({ length: 5 }, (_, idx) => idx + 1 <= rating);
  return (
    <div className="flex items-center gap-x-1">
      {stars.map((isFilled, idx) => {
        const className = `size-3 ${
          isFilled ? "text-primary" : "text-gray-400"
        }`;
        return isFilled ? (
          <Star fill="blue" className={className} key={idx} size="20" />
        ) : (
          <Star className={className} key={idx} size="20" />
        );
      })}
    </div>
  );
};

export default Rating;
