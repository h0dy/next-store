import { Suspense } from "react";
import Container from "../global/Container";
import CartButton from "./CartButton";
import DarkMode from "./DarkMode";
import LinksDropdown from "./LinksDropdown";
import Logo from "./Logo";
import NavSearch from "./NavSearch";

const Navbar = () => {
  return (
    <nav className="border-b">
      <Container className="navbar-container">
        <Logo />

        <Suspense>
          <NavSearch />
        </Suspense>

        <div className="navbar-side">
          <CartButton />
          <DarkMode />
          <LinksDropdown />
        </div>
      </Container>
    </nav>
  );
};

export default Navbar;
