import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { ShoppingCart, Sun, Moon, User } from 'lucide-react';
import { RootState } from '../store';
import { toggleTheme } from '../store/slices/themeSlice';

const Navbar = () => {
  const dispatch = useDispatch();
  const { isDarkMode } = useSelector((state: RootState) => state.theme);
  const { items } = useSelector((state: RootState) => state.cart);
  const { isAuthenticated } = useSelector((state: RootState) => state.auth);

  return (
    <nav className="bg-white dark:bg-gray-800 shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="text-xl font-bold text-green-600 dark:text-green-400">
            GroceryHub
          </Link>
          
          <div className="flex items-center space-x-4">
            <Link to="/products" className="text-gray-700 dark:text-gray-200 hover:text-green-600 dark:hover:text-green-400">
              Products
            </Link>
            
            <button
              onClick={() => dispatch(toggleTheme())}
              className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700"
            >
              {isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>

            <Link to="/cart" className="relative">
              <ShoppingCart className="w-6 h-6 text-gray-700 dark:text-gray-200" />
              {items.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-green-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {items.length}
                </span>
              )}
            </Link>

            {isAuthenticated ? (
              <Link to="/profile">
                <User className="w-6 h-6 text-gray-700 dark:text-gray-200" />
              </Link>
            ) : (
              <Link to="/login" className="text-gray-700 dark:text-gray-200 hover:text-green-600 dark:hover:text-green-400">
                Login
              </Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;