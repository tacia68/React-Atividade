import React, { useState } from "react"; // Importa o React e o hook useState
import "bootstrap/dist/css/bootstrap.min.css"; // Importa o CSS do Bootstrap
import { useDispatch } from "react-redux"; // Importa o hook useDispatch do react-redux para despachar ações para a store
import { useSelector } from "react-redux/es/hooks/useSelector"; // Importa o hook useSelector do react-redux para acessar o estado da store
import { Button } from "reactstrap"; // Importa o componente de botão do Reactstrap
import { addProdutoNome } from "../../redux/slices/carrinho.slice"; // Importa a action "addProdutoNome" do slice "carrinho.slice"
import { RootState } from "../../redux/store"; // Importa o tipo RootState da store da aplicação
import ProductCard from "../CardProduto"; // Importa o componente "CardProduto" de outro arquivo
import { Grid } from "@mui/material"; // Importa o componente de grade do Material-UI
import { Produto, updateProduto, removeProduto } from "../../redux/slices/api.slice.produtos"; // Importa tipos e ações relacionados aos produtos

export default function ProdutosList() { // Declaração do componente funcional "ProdutosList"
  const dispatch = useDispatch(); // Cria uma instância do hook useDispatch

  const { produtos } = useSelector((state: RootState) => state.apiProduto); // Obtém a lista de produtos do estado global da aplicação usando o hook useSelector
  const { isAdmin } = useSelector((state: RootState) => state.apiLogin); // Obtém a informação se o usuário é um administrador do estado global da aplicação usando o hook useSelector

  const [editingProduto, setEditingProduto] = useState<Produto>({ // Cria o estado local "editingProduto" para controlar o produto sendo editado
    id: "",
    nome: "",
    preco: 0,
    estoque: 0,
  });
  const [isEditing, setIsEditing] = useState(false); // Cria o estado local "isEditing" para controlar se o usuário está editando um produto

  const inserirCarrinho = (name: string) => { // Função que insere um produto no carrinho ao ser chamada
    dispatch(addProdutoNome(name)); // Despacha a action "addProdutoNome" para adicionar o produto no carrinho
  };

  const handleEdit = (produto: Produto) => { // Função que trata a ação de editar um produto
    setEditingProduto({ ...produto }); // Define o estado "editingProduto" com o produto que está sendo editado
    setIsEditing(true); // Define o estado "isEditing" como true para indicar que o usuário está editando um produto
  };

  const handleRemove = (produtoId: string | undefined) => { // Função que trata a ação de remover um produto
    if (produtoId) { // Verifica se o ID do produto é válido
      dispatch<any>(removeProduto(produtoId)); // Despacha a action "removeProduto" para remover o produto da lista de produtos
    }
  };

  const handleSubmitEdit = (e: React.FormEvent<HTMLFormElement>) => { // Função que trata a submissão do formulário de edição de produto
    e.preventDefault(); // Previne o comportamento padrão do formulário de recarregar a página
    dispatch<any>(updateProduto(editingProduto)); // Despacha a action "updateProduto" para atualizar os dados do produto
    setEditingProduto({ // Reseta o estado "editingProduto" para seus valores iniciais
      id: "",
      nome: "",
      preco: 0,
      estoque: 0,
    });
  };

  const TableAdmin: React.FC = () => { // Componente interno "TableAdmin" para renderizar a tabela de produtos para administradores
    return (
      <table className="table table-striped table-hover table-borderedk"> {/* Cria uma tabela usando classes do Bootstrap */}
        <thead> {/* Cabeçalho da tabela */}
          <tr className="table-danger">
            <th scope="col">#</th> {/* Cabeçalho das colunas */}
            <th scope="col">Nome do Produto</th>
            <th scope="col">Preço</th>
            <th scope="col">Estoque</th>
            <th scope="col">Ações</th>
          </tr>
        </thead>
        <tbody> {/* Corpo da tabela */}
          {produtos.map((produto, index) => ( // Mapeia a lista de produtos para criar as linhas da tabela
            <tr key={produto.id}> {/* Chave única para cada linha */}
              <th scope="row">{index + 1}</th> {/* Número sequencial */}
              <td> {/* Coluna de Nome */}
                {isEditing && editingProduto.id === produto.id ? ( // Se estiver editando, mostra o formulário de edição
                  <form onSubmit={handleSubmitEdit}>
                    <input
                      type="text"
                      value={editingProduto.nome}
                      onChange={(e) =>
                        setEditingProduto({ ...editingProduto, nome: e.target.value })
                      }
                    />
                    <button type="submit" className="botao">Salvar</button> {/* Botão para salvar as alterações */}
                  </form>
                ) : (
                  produto.nome // Caso contrário, mostra o nome do produto
                )}
              </td>
              <td>R$ {produto.preco}</td> {/* Coluna de Preço */}
              <td>{produto.estoque}</td> {/* Coluna de Estoque */}
              <td> {/* Coluna de Ações */}
                {isAdmin ? ( // Se o usuário for um administrador, mostra os botões de edição e remoção do produto
                  <>
                    {editingProduto.id !== produto.id ? ( // Se não estiver editando o produto atual, mostra os botões de edição e remoção
                      <>
                        <Button className="botaoI" onClick={() => handleEdit(produto)}>Editar</Button>
                        <Button className="botaoE" onClick={() => handleRemove(produto.id)}>Remover</Button>
                      </>
                    ) : null}
                  </>
                ) : ( // Caso contrário, mostra o botão para inserir o produto no carrinho
                  <Button onClick={() => inserirCarrinho(produto.nome)}>
                    Inserir no Carrinho
                  </Button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  };

  return (
    <Grid container sx={{ border: "0px solid red" }}> {/* Cria um container de grade usando o componente Grid do Material-UI */}
      {isAdmin ? ( // Se o usuário for um administrador, renderiza a tabela de produtos para administradores
        <TableAdmin />
      ) : ( // Caso contrário, renderiza os cards de produtos para os usuários comuns
        <Grid container justifyContent={"center"} gap={4} sx={{ border: "0px solid blue" }}>
          {produtos.map((produto, index) => ( // Mapeia a lista de produtos para criar os cards de produtos
            <Grid xs={2.5}> {/* Define o tamanho da coluna do Grid para o card do produto */}
              <ProductCard key={index} product={produto} /> {/* Renderiza o componente ProductCard para exibir as informações do produto */}
            </Grid>
          ))}
        </Grid>
      )}
    </Grid>
  );
}
