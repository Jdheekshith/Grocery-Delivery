import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { ShoppingCart } from 'lucide-react';
import { products } from '../data/products';
import { addToCart } from '../store/slices/cartSlice';

function Products() {
  const dispatch = useDispatch();
  const [category, setCategory] = useState('all');
  const [sortBy, setSortBy] = useState('name');

  const categories = ['all', ...new Set(products.map(product => product.category))];

  const filteredProducts = products
    .filter(product => category === 'all' || product.category === category)
    .sort((a, b) => {
      if (sortBy === 'price') return a.price - b.price;
      if (sortBy === 'name') return a.name.localeCompare(b.name);
      return 0;
    });

  return (
    <div>
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Our Products</h1>
        <div className="flex gap-4">
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
          >
            {categories.map(cat => (
              <option key={cat} value={cat}>
                {cat.charAt(0).toUpperCase() + cat.slice(1)}
              </option>
            ))}
          </select>
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
          >
            <option value="name">Sort by Name</option>
            <option value="price">Sort by Price</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProducts.map(product => (
          <div key={product.id} className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <Link to={`/products/${product.id}`}>
                <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{product.name}</h2>
              </Link>
              <p className="text-gray-600 dark:text-gray-300 mb-4">{product.description}</p>
              <div className="flex justify-between items-center">
                <span className="text-2xl font-bold text-green-600 dark:text-green-400">${product.price.toFixed(2)}</span>
                <button
                  onClick={() => dispatch(addToCart(product))}
                  className="flex items-center gap-2 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors"
                >
                  <ShoppingCart size={20} />
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products;