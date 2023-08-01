import { useState } from "react"; // Importa o hook useState do React para gerenciar o estado do componente
import { useDispatch } from "react-redux"; // Importa o hook useDispatch do react-redux para despachar ações para a store
import { AppDispatch } from "../../redux/store"; // Importa o tipo AppDispatch da store da aplicação
import { addProduto } from "../../redux/slices/api.slice.produtos"; // Importa a action "addProduto" do slice "api.slice.produtos" para adicionar um novo produto
import './estilo.css'; // Importa o arquivo de estilos "estilo.css" para estilizar o componente

export default function FormularioProduto() { // Declaração do componente funcional "FormularioProduto"
  const dispatch = useDispatch<AppDispatch>(); // Cria uma instância do hook useDispatch usando o tipo AppDispatch

  const [inputProduto, SetProduto] = useState({ // Cria o estado local "inputProduto" usando o hook useState, inicializado com um objeto contendo os campos do produto
    nome: "",
    preco: 0,
    estoque: 0,
  });

  const handleInput = (e: any) => { // Declaração da função "handleInput" que será chamada quando houver alterações nos campos de entrada
    SetProduto({ ...inputProduto, [e.target.name]: e.target.value }); // Atualiza o estado "inputProduto" com o novo valor do campo de entrada específico (nome, preco ou estoque)
  };

  const handleSubmit = (e: any) => { // Declaração da função "handleSubmit" que será chamada quando o formulário for submetido
    e.preventDefault(); // Evita que a página seja recarregada quando o formulário é submetido
    dispatch(addProduto(inputProduto)); // Despacha a action "addProduto" para adicionar um novo produto com os valores do estado "inputProduto"
  };

  return ( // Retorno do JSX que representa o formulário de cadastro de produtos
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }} // Estilos CSS inline para posicionar os elementos do formulário
    >
      <h3 className="mt-3">CADASTRAR PRODUTOS</h3> {/* Título do formulário */}
      <form onSubmit={handleSubmit}> {/* O formulário irá chamar a função "handleSubmit" quando for submetido */}
        <div className="row mb-3"> {/* Início do primeiro campo de entrada (NOME) */}
          <label className="col-sm-3 col-form-lable">NOME:</label> {/* Rótulo do campo de entrada */}
          <div className="col-md-8 linha2">
            <input
              type="text"
              className="form-control"
              name="nome"
              value={inputProduto.nome}
              onChange={handleInput}
            /> {/* Campo de entrada de texto para o nome do produto, seu valor é controlado pelo estado "inputProduto" */}
          </div>
        </div>

        <div className="row mb-3"> {/* Início do segundo campo de entrada (PREÇO) */}
          <label className="col-sm-3 col-form-lable">PREÇO:</label> {/* Rótulo do campo de entrada */}
          <div className="col-md-8 linha2">
            <input
              type="number"
              className="form-control linha"
              name="preco"
              value={inputProduto.preco}
              onChange={handleInput}
            /> {/* Campo de entrada numérico para o preço do produto, seu valor é controlado pelo estado "inputProduto" */}
          </div>
        </div>

        <div className="row mb-3"> {/* Início do terceiro campo de entrada (ESTOQUE) */}
          <label className="col-sm-3 col-form-lable">ESTOQUE:  </label> {/* Rótulo do campo de entrada */}
          <div className="col-md-8 linha2">
            <input
              type="number"
              className="form-control"
              name="estoque"
              value={inputProduto.estoque}
              onChange={handleInput}
            /> {/* Campo de entrada numérico para o estoque do produto, seu valor é controlado pelo estado "inputProduto" */}
          </div>
        </div>

        <div className="row mb-3"> {/* Botão de submissão do formulário */}
          <label className="col-sm-3 col-form-lable"></label> {/* Espaço vazio no layout */}
          <div className="col-md-8">
            <button 
              type="submit" 
              className="btn btn-lg botao" 
            >
              Inserir Produto {/* Texto do botão */}
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
