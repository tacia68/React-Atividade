import './App.css';
import Navbar from './components/Navegation';
import CardProducts from './components/ProdutosCards';

  // Dados dos cards de produtos
const cardProductData = [
  {
    title: "Tela",
    price: "R$ 3000,00",
    subtitle: "Telinha",
    src: "assets/product/pro1.jpg"
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


const navbarOptions = [
  {
    title: "Login",
    subItems: []
  },
  {
    title: "Signup",
    subItems: []
  },
  {
    title: "Produtos",
    subItems: ["Cadastrar", "Editar", "Deletar"]
  }
];

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar navbarOptions={navbarOptions}/>
        <CardProducts cardProducts={cardProductData} />
      </header>
    </div>
  );
}

export default App;
