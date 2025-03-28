import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { ShoppingCart } from 'lucide-react';
import { products } from '../data/products';
import { addToCart } from '../store/slices/cartSlice';

function ProductDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const product = products.find(p => p.id === id);

  if (!product) {
    return (
      <div className="text-center py-12">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Product Not Found</h1>
        <button
          onClick={() => navigate('/products')}
          className="text-green-600 hover:text-green-700"
        >
          Back to Products
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
        <div className="md:flex">
          <div className="md:flex-shrink-0">
            <img
              src={product.image}
              alt={product.name}
              className="h-96 w-full object-cover md:w-96"
            />
          </div>
          <div className="p-8">
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">{product.name}</h1>
            <p className="text-gray-600 dark:text-gray-300 mb-4">{product.description}</p>
            
            <div className="mb-6">
              <span className="text-3xl font-bold text-green-600 dark:text-green-400">
                ${product.price.toFixed(2)}
              </span>
            </div>

            <div className="mb-6">
              <p className="text-gray-600 dark:text-gray-300">
                Category: <span className="font-semibold">{product.category}</span>
              </p>
              <p className="text-gray-600 dark:text-gray-300">
                Stock: <span className="font-semibold">{product.stock} units</span>
              </p>
            </div>

            <button
              onClick={() => dispatch(addToCart(product))}
              className="flex items-center gap-2 bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors"
            >
              <ShoppingCart size={20} />
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;