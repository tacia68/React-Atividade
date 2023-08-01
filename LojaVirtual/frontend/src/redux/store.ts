import { combineReducers, configureStore } from "@reduxjs/toolkit";
import countReducer from "./slices/count.slice";
import carrinhoReducer from "./slices/carrinho.slice";
import { apiLoginReducer } from "./slices/api.slice.login";

import storage from "redux-persist/lib/storage";
import {
  persistReducer,
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import { apiProdutoReducer } from "./slices/api.slice.produtos";

// Combinando os reducers em um rootReducer
const rootReducer = combineReducers({
  count: countReducer, // Reducer do contador
  apiLogin: apiLoginReducer, // Reducer da API de login
  apiProduto: apiProdutoReducer, // Reducer da API de produtos
  carrinho: carrinhoReducer, // Reducer do carrinho
});

// Configuração de persistência para o rootReducer
const persistConfig = {
  key: "root", // Chave para identificar o estado persistido
  storage, // Configuração de armazenamento (localStorage)
  blacklist: ["apiProduto"], // Lista de reducers que não serão persistidos
};

// Criação de um reducer persistido usando o persistConfig
const persistedReducer = persistReducer(persistConfig, rootReducer);

// Configuração da store usando o rootReducer persistido e o middleware customizado
export const store = configureStore({
  reducer: persistedReducer, // Reducer persistido
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER], // Ações ignoradas durante a serialização para persistência
      },
    }),
});

// Configuração do persistor para a store
export const persistor = persistStore(store);

// Tipos para o estado global da aplicação e dispatch da store
export type RootState = ReturnType<typeof store.getState>; // Tipo para o estado global da aplicação
export type AppDispatch = typeof store.dispatch; // Tipo para o dispatch da store
