import React from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";

// Importando o Provider do Redux para fornecer a store à aplicação
import { Provider } from "react-redux";
import { persistor, store } from "./redux/store";

// Importando o PersistGate do redux-persist para garantir que a persistência seja carregada antes da renderização
import { PersistGate } from "redux-persist/integration/react";

// Importando os componentes principais da aplicação
import App from "./App"; // Componente raiz da aplicação
import Login from "./pages/Login"; // Componente da página de login
import Carrinho from "./pages/carrinho"; // Componente da página do carrinho

// Importando as bibliotecas de roteamento
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// Criando um root React para a renderização
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

// Criando o roteador com as configurações de rota para a aplicação
const router = createBrowserRouter([
  { path: "/", element: <Login /> }, // Rota da página de login
  { path: "/home", element: <App /> }, // Rota da página principal (App)
  { path: "/cart", element: <Carrinho /> }, // Rota da página do carrinho
]);

// Renderizando a aplicação dentro do root React
root.render(
  <React.StrictMode>
    {/* Provedor do Redux para fornecer a store à aplicação */}
    <Provider store={store}>
      {/* PersistGate para garantir que a persistência seja carregada antes da renderização */}
      <PersistGate loading={true} persistor={persistor}>
        {/* Provedor do roteador para gerenciar as rotas da aplicação */}
        <RouterProvider router={router} />
      </PersistGate>
    </Provider>
  </React.StrictMode>
);

// Função para relatar web vitals (não incluída nos comentários)
reportWebVitals();
