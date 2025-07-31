import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="">
      <h1 className="text-xl font-bold">Estatein</h1>
      <div className="space-x-4">
        <Link to="/">Home</Link>
        <Link to="/about">About Us</Link>
        <Link to="/properties">Properties</Link>
        <Link to="/services">Services</Link>
        <Link to="/contact">Contact</Link>
      </div>
    </nav>
  );
};

export default Navbar;