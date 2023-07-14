import React from 'react';

interface ICardProduct {
  src?: string;
  title?: string;
  price?: string;
  subtitle?: string;
}

interface CardProductsProps {
  cardProducts: ICardProduct[];
}

const CardProduct: React.FC<{ cardProduct: ICardProduct }> = ({ cardProduct }) => {
  return (
    <div className="card">
      <img src={cardProduct.src} className="card-img-top" alt="Product" />
      <div className="card-body">
        <h5 className="card-title">{cardProduct.title}</h5>
        <p className="card-text">{cardProduct.subtitle}</p>
        <p className="card-text">Preço: {cardProduct.price}</p>
      </div>
    </div>
  );
};

const CardProducts: React.FC<CardProductsProps> = ({ cardProducts }) => {
  return (
    <div className="container">
      <div className="row row-cols-3 g-4">
        {cardProducts.map((cardProduct, index) => (
          <div className="col" key={index}>
            <CardProduct cardProduct={cardProduct} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardProducts;
