import { useDispatch, useSelector } from "react-redux"; // Importa o hook useDispatch e useSelector do react-redux para interagir com o estado da aplicação
import { Navbar, NavbarBrand } from "reactstrap"; // Importa componentes de barra de navegação da biblioteca "reactstrap"
import { RootState } from "../../redux/store"; // Importa o tipo RootState da store da aplicação
import { useNavigate } from "react-router-dom"; // Importa o hook useNavigate do react-router-dom para navegar entre as páginas
import { logout } from "../../redux/slices/api.slice.login"; // Importa a action "logout" do slice "apiLogin" para realizar o logout do usuário
import { NavItem, NavLink } from "react-bootstrap"; // Importa componentes de item de navegação da biblioteca "react-bootstrap"

export default function NavBarCustom() { // Declaração do componente funcional "NavBarCustom"
  const navigate = useNavigate(); // Cria uma instância do hook useNavigate para navegação entre as páginas

  const { isAdmin } = useSelector((state: RootState) => state.apiLogin); // Usa o hook useSelector para obter o valor de "isAdmin" do estado global da aplicação (apiLogin slice)
  const produto = useSelector((state: RootState) => state.carrinho); // Usa o hook useSelector para obter o valor do carrinho (state.carrinho) do estado global da aplicação
  const dispatch = useDispatch(); // Cria uma instância do hook useDispatch para despachar a action "logout"

  function Logout() { // Declaração da função "Logout" para lidar com a ação de logout do usuário
    dispatch(logout()); // Despacha a action "logout" para fazer o logout do usuário
    navigate("/"); // Navega para a página inicial após o logout
  }

  return ( // Retorno do JSX que representa a barra de navegação personalizada
    <div>
      <Navbar
        style={{ 
          position: "sticky", 
          top: "0", 
          backgroundColor: isAdmin ? "#A9395D" : "#FCC0DA", 
          color: isAdmin ? "#ffe0ff" : "black" 
        }}
      >
        <NavbarBrand className="lojaOn">LOJA ONLINE</NavbarBrand>

        {/*// Item de navegação "PRODUTOS" que, ao ser clicado, navegará para a página "/home"*/}
        <NavItem onClick={() => navigate("/home")}> 
          <NavLink>PRODUTOS</NavLink>
        </NavItem>

        {!isAdmin ? ( // Se o usuário não for administrador, mostrará o item de navegação "CARRINHO" com a quantidade de produtos no carrinho
          <NavItem onClick={() => navigate("/cart")}>
            <NavLink>CARRINHO <b style={{color: "green"}}>{` (${produto.produtos.length}) `}</b> </NavLink>
          </NavItem>
        ) : null}

        {/*Item de navegação "LOGOUT" que, ao ser clicado, executará a função Logout para realizar o logout do usuário*/}
        <NavItem onClick={() => Logout()}> 
          <NavLink >LOGOUT</NavLink>
        </NavItem>
      </Navbar>
    </div>
  );
}
