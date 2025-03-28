import React from 'react';
import { useSelector } from 'react-redux';

function Cart() {
  const { items, total } = useSelector((state) => state.cart);

  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Shopping Cart</h1>
    </div>
  );
}

export default Cart;