import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="sticky top-0 z-40 border-b border-slate-200 bg-white/90 shadow-sm backdrop-blur">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <span className="text-lg font-bold tracking-tight text-indigo-700 sm:text-xl">
          Header Navbar
        </span>
        <div className="flex items-center gap-4 ">
          <nav>
            <ul className="flex items-center gap-4">
              <li className="hover:text-red-400">
                <Link to="/">Home</Link>
              </li>
              <li className="hover:text-red-400">
                <Link to="/products">Products</Link>
              </li>
              <li className="hover:text-red-400">
                <Link to="/cart">Cart</Link>
              </li>
            </ul>
          </nav>
          <span
            className="h-2.5 w-2.5 rounded-full bg-emerald-500 ring-4 ring-emerald-100"
            aria-hidden="true"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
