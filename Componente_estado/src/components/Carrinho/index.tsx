// Importando o React
import React from 'react';

// Importando o arquivo de estilização CSS do componente Carrinho
import './Carrinho.css';

// Interface que define o formato de um objeto Product
interface Product {
  src: string; // URL da imagem do produto
  title: string; // Título do produto
  price: string; // Preço do produto
  subtitle: string; // Subtítulo do produto
}

// Interface que define as props que o componente Carrinho receberá
interface Props {
  cartItems: Product[]; // Array de produtos adicionados ao carrinho
  removeFromCart: (product: Product) => void; // Função que remove um produto do carrinho
}

// Definindo o componente Carrinho
const Carrinho: React.FC<Props> = ({ cartItems, removeFromCart }) => {
  // Renderizando o JSX do componente
  return (
    // Se o carrinho estiver vazio, a div terá a classe 'cart empty', caso contrário, 'cart filled'
    <div className={`cart ${cartItems.length === 0 ? 'empty' : 'filled'}`}> 
      {
        // Se não houver itens no carrinho, mostre a mensagem "Seu carrinho está vazio"
        cartItems.length === 0 ? (
          <h2>Seu carrinho está vazio</h2>
        ) : (
          // Caso contrário, mostre os itens adicionados ao carrinho
          <div>
            <h2>Seu Carrinho</h2>
            {
              // Mapeie os itens do carrinho para exibir suas informações e um botão para removê-los
              cartItems.map((product, index) => (
                <div key={index}>
                  <img src={product.src} alt={product.title} /> 
                  <h3>{product.title}</h3>
                  <p>{product.price}</p>
                  <p>{product.subtitle}</p>
             
                  <button onClick={() => removeFromCart(product)}>
                    Remover do carrinho
                  </button>
                </div>
              ))
            }
          </div>
        )
      }
    </div>
  );
};

// Exportando o componente Carrinho
export default Carrinho;
