import React from 'react';
import { Link } from 'react-router-dom';
import { products } from '../data/products';

function Home() {
  const featuredProducts = products.filter(product => product.featured);

  return (
    <div className="space-y-12">
      <section className="text-center">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
          Fresh Groceries Delivered to Your Door
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
          Shop from our wide selection of fresh produce, pantry essentials, and more.
        </p>
        <Link
          to="/products"
          className="inline-block bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors"
        >
          Start Shopping
        </Link>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Featured Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredProducts.map(product => (
            <div key={product.id} className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <Link to={`/products/${product.id}`}>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{product.name}</h3>
                </Link>
                <p className="text-gray-600 dark:text-gray-300 mb-4">{product.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-green-600 dark:text-green-400">${product.price.toFixed(2)}</span>
                  <Link
                    to={`/products/${product.id}`}
                    className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Home;