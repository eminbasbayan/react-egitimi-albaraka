import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import CounterProvider from './context/CounterContext.jsx';
import CartProvider from './context/CartContext.jsx';
import AuthProvider from './context/AuthContext.jsx';

createRoot(document.getElementById('root')).render(
  <AuthProvider>
    <CartProvider>
      <CounterProvider>
        <App />
      </CounterProvider>
    </CartProvider>
  </AuthProvider>,
);
