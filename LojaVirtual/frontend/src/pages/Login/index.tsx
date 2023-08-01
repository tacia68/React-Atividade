// Importando arquivos CSS
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";

// Importando a imagem do logo
import logo from "../../assets/Barbie-Symbol.jpg";

// Importando hooks e componentes do React
import { useEffect, useState } from "react";
import { Form, Image, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";

// Importando a função de login do Redux slice "api.slice.login"
import { doLogin } from "../../redux/slices/api.slice.login";

// Importando o tipo de dispatch e o estado global da store do Redux
import { AppDispatch, RootState } from "../../redux/store";

// Importando o hook useNavigate do "react-router-dom"
import { useNavigate } from "react-router-dom";

// Definindo o componente Login como padrão a ser exportado
export default function Login() {
  // Selecionando dados do estado global "apiLogin" usando o hook useSelector
  const { error, loading, isSucess } = useSelector(
    (state: RootState) => state.apiLogin
  );
  
  // Obtendo a função dispatch para disparar as ações do Redux
  const dispatch = useDispatch<AppDispatch>();

  // Obtendo a função "navigate" para navegar entre rotas do react-router-dom
  const navigate = useNavigate();

  // Definindo estados para o email e a senha usando o hook useState
  const [email, SetEmail] = useState("");
  const [password, SetPassword] = useState("");

  // Função assíncrona para tentar fazer login
  async function TryLogin() {
    // Disparando a ação "doLogin" com os dados de email e senha como payload
    dispatch(
      doLogin({
        email: email,
        senha: password,
      })
    );
  }

  // Efeito colateral que será executado quando "isSucess" for alterado
  useEffect(() => {
    // Se o login foi bem-sucedido, navegar para a página "/home"
    if (isSucess) {
      navigate("/home");
    }
  }, [isSucess]);

  // JSX que representa o formulário de login
  return (
    <Form style={{ width: "300px" }} className="container">
      <div style={{ margin: "0 auto" }}>
        {/* Exibindo a imagem do logo */}
        <Image className="imageBorder" src={logo} />
      </div>
      {/* Campo de entrada para o email */}
      <input
        placeholder="Digite aqui seu email"
        onChange={(e) => {
          // Atualizando o estado do email com o valor digitado
          SetEmail(e.target.value);
        }}
      />
      {/* Campo de entrada para a senha */}
      <input
        type="password"
        placeholder="Digite aqui sua senha"
        onChange={(e) => {
          // Atualizando o estado da senha com o valor digitado
          SetPassword(e.target.value);
        }}
      />

      {/* Exibindo "Loading..." se o login estiver em andamento, caso contrário, exibindo o botão de login */}
      {loading ? (
        "Loading..."
      ) : (
        <Button className="loginBt" onClick={() => TryLogin()}>Login</Button>
      )}

      {/* Exibindo a mensagem de erro, se houver */}
      {error}
    </Form>
  );
}
