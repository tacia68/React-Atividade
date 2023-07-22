// src/components/Carrinho/index.tsx
import React from 'react';
import './Carrinho.css';

interface Product {
  src: string;
  title: string;
  price: string;
  subtitle: string;
}

interface Props {
  cartItems: Product[];
  removeFromCart: (product: Product) => void;
}

const Carrinho: React.FC<Props> = ({ cartItems, removeFromCart }) => {
  return (
    <div className={`cart ${cartItems.length === 0 ? 'empty' : 'filled'}`}> {/* Aqui está a aplicação da classe CSS condicional */}
      {cartItems.length === 0 ? (
        <h2>Seu carrinho está vazio</h2>
      ) : (
        <div>
          <h2>Seu Carrinho</h2>
          {cartItems.map((product, index) => (
            <div key={index}>
              <img src={product.src} alt={product.title} />
              <h3>{product.title}</h3>
              <p>{product.price}</p>
              <p>{product.subtitle}</p>
              <button onClick={() => removeFromCart(product)}>
                Remover do carrinho
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Carrinho;
