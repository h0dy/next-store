import { FaStore } from "react-icons/fa";

import { Button } from "../ui/button";
import Link from "next/link";

const Logo = () => {
  return (
    <Button size="icon" asChild>
      <Link href="/">
        <FaStore className="logo" />
      </Link>
    </Button>
  );
};

export default Logo;
