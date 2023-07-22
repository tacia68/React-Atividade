/*src/app.js*/
import './App.css';
import Navbar from './components/Navegation';
import CardProducts from './components/ProdutosCards';
import Carrinho from './components/Carrinho';
import React, { useState } from 'react';


// Array de dados dos produtos
const cardProductData = [
  {
    title: "Tela", // Título do produto
    price: "R$ 3000,00", // Preço do produto
    subtitle: "Telinha", // Subtítulo do produto
    src: "assets/product/pro1.jpg" // Fonte da imagem do produto
  },
  {
    title: "Mouse",
    price: "R$ 1030,00",
    subtitle: "Telinha",
    src: "assets/product/pro2.jpg"
  },
  {
    title: "Rosa",
    price: "R$ 2030,00",
    subtitle: "Telinha",
    src: "assets/product/pro3.jpg"
  },
  {
    title: "Borracha",
    price: "R$ 3200,00",
    subtitle: "Telinha",
    src: "assets/product/pro4.jpg"
  },
  {
    title: "Lapis",
    price: "R$ 2300,00",
    subtitle: "Telinha",
    src: "assets/product/pro5.jpg"
  },
  {
    title: "Caneta",
    price: "R$ 4400,00",
    subtitle: "Telinha",
    src: "assets/product/pro6.jpg"
  },
];

// Array de opções para a barra de navegação
const navbarOptions = [
  {
    title: "Login", // Título da opção
    subItems: [] // Subitens da opção (nenhum neste caso)
  },
  {
    title: "Signup",
    subItems: []
  },
  {
    title: "Produtos",
    subItems: ["Cadastrar", "Editar", "Deletar"] // Subitens da opção
  }
];

// Componente App
function App() {
  // Definindo o estado "cartItems", que guarda os itens no carrinho de compras
  // A função "setCartItems" é usada para atualizar esse estado
  const [cartItems, setCartItems] = useState([]);

  // Função para adicionar um item ao carrinho
  // Ela pega o produto como um argumento e adiciona esse produto ao estado "cartItems"
  const addToCart = (product) => {
    setCartItems([...cartItems, product]);
  };

  // Função para remover um item do carrinho
  // Ela pega o produto que precisa ser removido como um argumento
  // E então filtra o estado "cartItems" para criar uma nova lista sem o produto a ser removido
  const removeFromCart = (productToRemove) => {
    setCartItems(cartItems.filter((product) => product !== productToRemove));
  };

  // O que o componente App renderiza
  return (
    <div className="App">
      <header className="App-header">
        {/* Renderiza o componente Navbar com as navbarOptions passadas como propriedade */}
        <Navbar navbarOptions={navbarOptions}/>

        {/* Renderiza o componente CardProducts com os cardProductData passados como propriedade */}
        {/* Além disso, também passa a função addToCart como prop para que CardProducts possa adicionar itens ao carrinho */}
        <CardProducts cardProducts={cardProductData} addToCart={addToCart} />

        {/* Renderiza o componente Carrinho, passando os itens do carrinho e a função removeFromCart como props */}
        <Carrinho cartItems={cartItems} removeFromCart={removeFromCart} />
      </header>
    </div>
  );
}


export default App;
