import React from 'react';

const products = [
  {
    id: 1,
    name: 'iPhone 14 Pro',
    price: '₹1,29,900',
    image: 'https://via.placeholder.com/150',
  },
  {
    id: 2,
    name: 'Samsung Galaxy S23',
    price: '₹74,999',
    image: 'https://via.placeholder.com/150',
  },
  {
    id: 3,
    name: 'OnePlus 11',
    price: '₹56,999',
    image: 'https://via.placeholder.com/150',
  },
];

function App() {
  return (
    <div style={{ padding: '20px' }}>
      <h1>Mobile Shop</h1>
      <div style={{ display: 'flex', gap: '20px' }}>
        {products.map((product) => (
          <div key={product.id} style={{ border: '1px solid #ccc', padding: '10px' }}>
            <img src={product.image} alt={product.name} width="150" height="150" />
            <h2>{product.name}</h2>
            <p>{product.price}</p>
            <button>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
