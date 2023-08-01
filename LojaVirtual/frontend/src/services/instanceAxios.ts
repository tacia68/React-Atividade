import axios from "axios";

// Cria uma instância do axios com uma configuração padrão de cabeçalho
export const api = axios.create({
  headers: {
    "content-type": "application/json", // Configura o cabeçalho 'content-type' para 'application/json'
  },
});

// Intercepta a resposta da requisição para tratamento de erros
api.interceptors.response.use(
  function (response) {
    return response; // Retorna a resposta sem alterações se não houver erros
  },
  function (er) {
    // Função para tratar erros na resposta da requisição
    if (axios.isAxiosError(er)) { // Verifica se o erro é um erro do axios
      if (er.response) { // Verifica se há uma resposta na propriedade 'response' do erro
        if (er.response.status === 403) { // Verifica se o status da resposta é 403 (Forbidden)
          localStorage.removeItem("persist:root"); // Remove os dados persistidos no localStorage
          window.location.href = "/"; // Redireciona o usuário para a tela de login
        }
      }
    }

    return Promise.reject(er); // Rejeita a Promise com o erro tratado
  }
);
