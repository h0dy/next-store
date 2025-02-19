import Link from "next/link";
import { Button } from "../ui/button";
import DynamicTitle from "./DynamicTitle";
import HeroCarousel from "./HeroCarousel";

const Hero = () => {
  const titles = [
    "Changing the way people shop.",
    "Your new era of shopping.",
    "Simplifying the way you shop.",
    "Creating a better way to shop.",
  ];

  return (
    <section className="hero-grid">
      <div className="">
        <DynamicTitle titles={titles} />
        <p className="mt-8 max-w-xl text-lg leading-8 text-muted-foreground">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur
          rem ex dolore consequatur tenetur quaerat ipsam sunt, quae deserunt
          quas aliquam recusandae non, facere optio eius, velit dignissimos et!
          Repudiandae.
        </p>
        <Button asChild size="lg" className="mt-10">
          <Link href={"/products"}>Our products</Link>
        </Button>
      </div>

      <HeroCarousel />
    </section>
  );
};

export default Hero;
