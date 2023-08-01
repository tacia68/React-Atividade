// Importando hooks e componentes necessários
import { useDispatch, useSelector } from "react-redux";
import { ListGroup, ListGroupItem } from "reactstrap";
import { Avatar, Button } from "@mui/material";
import NavBarCustom from "../../components/Navegation/navbar";
import { AppDispatch, RootState } from "../../redux/store";
import { removeProdutoNome } from "../../redux/slices/carrinho.slice";
import { Produto, fetchProdutos } from "../../redux/slices/api.slice.produtos";
import { useEffect } from "react";
import { configApi } from "../../constans";
import Quantidade from "../../components/Quantidade";

// Componente funcional Carrinho
export default function Carrinho() {
  // Obtendo a função de dispatch do Redux para despachar ações
  const dispatch = useDispatch();
  const dispatchProdutos = useDispatch<AppDispatch>();

  // Obtendo o estado do Redux usando useSelector
  const { isAdmin } = useSelector((state: RootState) => state.apiLogin);
  const produtosCarrinho = useSelector((state: RootState) => state.carrinho);
  const { produtos } = useSelector((state: RootState) => state.apiProduto);

  // Função para remover um produto do carrinho
  function removerCarrinho(index: number) {
    dispatch(removeProdutoNome(index));
  }

  // Efeito colateral para buscar os produtos da API quando o componente é montado
  useEffect(() => {
    dispatchProdutos(fetchProdutos());
  }, []);

  console.log("[Carrinho]-produtos.length -> ", produtos.length);

  return (
    <div className="containerCart">
      {/* Componente de navegação personalizado */}
      <div style={{ width: "100%" }}>
        <NavBarCustom />
      </div>
      {/* Título do carrinho */}
      <h2 >LISTA DE COMPRAS - CARRINHO </h2>

      {/* Renderiza a lista de produtos no carrinho com base no tipo de usuário (admin ou cliente) */}
      {isAdmin ? (
        // Layout para admin
        <div style={{ overflow: "scroll", height: "500px" }}>
          <ListGroup flush>
            {produtosCarrinho.produtos.map((produto, index) => {
              return <ListGroupItem key={index}>{produto}</ListGroupItem>;
            })}
          </ListGroup>
        </div>
      ) : (
        // Layout para cliente
        <table className="table table-responsive table-striped table-hover table-borderedk">
          <thead>
            <tr className="table-danger">
              <th scope="col">#</th>
              <th scope="col">Produto</th>
              <th scope="col">Nome do Produto</th>
              <th scope="col">Preço</th>
              <th scope="col">Quantidade</th>
              <th scope="col">Remover</th>
            </tr>
          </thead>
          <tbody>
            {produtosCarrinho.produtos.map((produtoNome, index) => {
              console.log("produtos -> ", produtos);
              console.log("produtosCarrinho -> ", produtosCarrinho);
              console.log("produtosCarrinho.produtos -> ", produtosCarrinho.produtos);

              // Encontra os detalhes do produto com base no nome
              const productDetails: Produto | undefined = produtos?.find(
                (produtoDetails) => produtoDetails.nome === produtoNome
              );
              console.log("productDetails -> ", productDetails);
              return (
                <tr key={productDetails?.id}>
                  <th scope="row">{index + 1}</th>
                  <td>
                    {/* Avatar do produto */}
                    <Avatar alt="miniatura do produto" src={configApi.photoUrl} />
                  </td>
                  <td>{productDetails?.nome}</td>
                  <td>R$ {productDetails?.preco.toFixed(2)}</td>
                  <td>
                    {/* Componente Quantidade para ajustar a quantidade do produto */}
                    <Quantidade quantidadeInicial={1} quantidadeMaxima={productDetails?.estoque || 0} />
                  </td>
                  <td>
                    {/* Botão para remover o produto do carrinho */}
                    <Button
                      color="error"
                      variant="outlined"
                      sx={{
                        "&:hover": {
                          backgroundColor: "Black",
                          color: "red",
                        },
                      }}
                      onClick={() => {
                        removerCarrinho(index);
                      }}
                    >
                      Remover do Carrinho
                    </Button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      )}
    </div>
  );
}
