import { NavLink, useNavigate } from 'react-router-dom';
import { BsCart } from 'react-icons/bs';
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import { AuthContext } from '../../context/AuthContext';

const Header = () => {
  const { cartItems } = useContext(CartContext);
  const { token, handleLogout } = useContext(AuthContext);
  const navigate = useNavigate();

  return (
    <header className="sticky top-0 z-40 border-b border-slate-200 bg-white/90 shadow-sm backdrop-blur">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <span className="text-lg font-bold tracking-tight text-indigo-700 sm:text-xl">
          Header Navbar
        </span>
        <div className="flex items-center gap-4 ">
          <nav>
            <ul className="flex items-center gap-4">
              <li>
                <NavLink
                  className={({ isActive }) =>
                    `hover:text-red-400 ${isActive && 'text-red-400'}`
                  }
                  to="/"
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={({ isActive }) =>
                    `hover:text-red-400 ${isActive && 'text-red-400'}`
                  }
                  to="/products"
                >
                  Products
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={({ isActive }) =>
                    `hover:text-red-400 flex items-center gap-1 relative ${isActive && 'text-red-400'}`
                  }
                  to="/cart"
                >
                  <BsCart />
                  <span className="text-xs absolute bg-red-600 text-white w-3 h-3 flex items-center justify-center rounded-full text-center top-[-8px] right-[-6px]">
                    {cartItems.length}
                  </span>
                </NavLink>
              </li>

              <li>
                {token ? (
                  <button onClick={() => handleLogout()}>Çıkış Yap</button>
                ) : (
                  <button onClick={() => navigate('/auth/login')}>
                    Giriş Yap
                  </button>
                )}
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
