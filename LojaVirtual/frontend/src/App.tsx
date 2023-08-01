// Importando os estilos CSS necessários
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-bootstrap";

// Importando os hooks e tipos do Redux
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "./redux/store";

// Importando a action para buscar os produtos
import { fetchProdutos } from "./redux/slices/api.slice.produtos";

// Importando os componentes utilizados na aplicação
import FormularioProduto from "./components/Produtos/formProduto";
import ProdutosList from "./components/Produtos/listProdutos";
import NavBarCustom from "./components/Navegation/navbar";

function App() {
  // Obtendo o estado 'isAdmin' do Redux usando o hook 'useSelector'
  const { isAdmin } = useSelector((state: RootState) => state.apiLogin);

  // Obtendo o estado 'loading' dos produtos do Redux usando o hook 'useSelector'
  const { loading } = useSelector((state: RootState) => state.apiProduto);

  // Obtendo a função de dispatch do Redux para despachar ações
  const dispatch = useDispatch<AppDispatch>();

  // Efeito colateral para buscar os produtos quando o componente é montado
  useEffect(() => {
    dispatch(fetchProdutos());
  }, []);

  return (
    <div className="container" style={{ justifyContent: "start" }}>
      <div style={{ width: "100%" }}>
        {/* Renderização do componente NavBarCustom */}
        <NavBarCustom />
      </div>

      {loading ? (
        // Renderização do texto "Loading..." enquanto os produtos estão sendo carregados
        "Loading..."
      ) : (
        <div>
          {/* Renderização do formulário de produto se o usuário for um administrador */}
          {isAdmin ? (
            <div style={{ height: "100%" }}>
              <FormularioProduto />
            </div>
          ) : null}

          <div style={{ overflow: "scroll", height: "400px" }}>
            {/* Renderização do componente ProdutosList */}
            <ProdutosList />
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
