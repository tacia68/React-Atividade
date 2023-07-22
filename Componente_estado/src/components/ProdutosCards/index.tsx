/*src/ProdutosCards/index.tsx*/

import React from 'react';
import './CardProduct.css';


// Interface para os dados de um produto individual
interface ICardProduct {
  src?: string; // Fonte da imagem do produto
  title?: string; // Título do produto
  price?: string; // Preço do produto
  subtitle?: string; // Subtítulo do produto
}

// Props do componente CardProducts
interface CardProductsProps {
  cardProducts: ICardProduct[]; // Array de dados dos produtos
  addToCart: (product: ICardProduct) => void;
}

// Props do componente CardProduct
interface CardProductProps {
  cardProduct: ICardProduct;
  addToCart: (product: ICardProduct) => void;
}

// Componente CardProduct representa um produto individual
const CardProduct: React.FC<CardProductProps> = ({ cardProduct, addToCart }) => {
  return (
    <div className="card">
      <img src={cardProduct.src} className="card-img-top product-image" alt="Product" />
      <div className="card-body">
        <h5 className="card-title">{cardProduct.title}</h5>
        <p className="card-text">{cardProduct.subtitle}</p>
        <p className="card-text">Preço: {cardProduct.price}</p>

        <button onClick={() => addToCart(cardProduct)}> Adicionar ao Carrinho  </button>
      </div>
    </div>
  );
};

// Componente CardProducts renderiza a lista de produtos
const CardProducts: React.FC<CardProductsProps> = ({ cardProducts, addToCart }) => {
  return (
    <div className="container">
      <div className="row row-cols-3 g-4">
        {cardProducts.map((cardProduct, index) => (
          <div className="col" key={index}>
            <CardProduct cardProduct={cardProduct} addToCart={addToCart} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardProducts;
