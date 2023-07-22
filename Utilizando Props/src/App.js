import './App.css';
import Navbar from './components/Navegation';
import CardProducts from './components/ProdutosCards';

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

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* Renderiza o componente Navbar com as navbarOptions passadas como propriedade */}
        <Navbar navbarOptions={navbarOptions}/>
        {/* Renderiza o componente CardProducts com os cardProductData passados como propriedade */}
        <CardProducts cardProducts={cardProductData} />
      </header>
    </div>
  );
}

export default App;
