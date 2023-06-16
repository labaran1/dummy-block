import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { useEffect } from 'react';

function App() {
  const [cart, setCart] = useState([
    { id: 1, name: 'Product 1', price: 100, qty: 1 },
    { id: 2, name: 'Product 2', price: 200, qty: 1 },
    { id: 3, name: 'Product 3', price: 300, qty: 1 },
    { id: 4, name: 'Product 4', price: 400, qty: 1 },
    { id: 5, name: 'Product 5', price: 500, qty: 1 },
    { id: 6, name: 'Product 6', price: 600, qty: 1 },
    { id: 7, name: 'Product 7', price: 700, qty: 1 },
    { id: 8, name: 'Product 8', price: 800, qty: 1 },
    { id: 9, name: 'Product 9', price: 900, qty: 1 },
    { id: 10, name: 'Product 10', price: 1000, qty: 1 },
    { id: 11, name: 'Product 11', price: 1100, qty: 1 },
    { id: 12, name: 'Product 12', price: 1200, qty: 1 },
    { id: 13, name: 'Product 13', price: 1300, qty: 1 },
    { id: 14, name: 'Product 14', price: 1400, qty: 1 },
  ]);
  const [currentCart, setCurrentCart] = useState([...cart]);

  return (
    <div className='App'>
      <button
        style={{ margin: '2rem' }}
        onClick={() => {
          if (currentCart.length < 3) {
            setCurrentCart([...cart]);
          } else {
            const a = cart;
            const c = a?.slice(14 - 2);
            setCurrentCart([...c]);
          }
        }}
      >
        {' '}
        Shrink
      </button>

      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '1rem',
          transition: 'all 0.5s ease-in-out',
        }}
      >
        {currentCart.map((item) => (
          <div
            key={item.id}
            style={{
              background: '#ccc',
              width: '200px',
              padding: '1rem',
              alignSelf: 'center',
            }}
          >
            <span>
              {item.name} {item.price} {item.qty}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
