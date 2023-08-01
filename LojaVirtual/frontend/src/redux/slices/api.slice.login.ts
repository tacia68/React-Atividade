import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { AxiosResponse } from "axios";
import { configApi } from "../../constans";
import { api } from "../../services/instanceAxios";

// Definindo a interface para o estado da API de login
interface ApiState {
  loading: boolean; // Indica se a requisição está em andamento
  data: object; // Armazena os dados da resposta da requisição
  error: string; // Armazena o erro ocorrido durante a requisição, se houver
  isSucess: boolean; // Indica se a requisição foi bem-sucedida
  isAdmin: boolean; // Indica se o usuário é um administrador (exemplo)
}

// Estado inicial da API de login
const initialState: ApiState = {
  loading: false,
  data: {},
  error: "",
  isSucess: false,
  isAdmin: false,
};

// Função assíncrona que realiza a ação de login
export const doLogin = createAsyncThunk(
  "api/login",
  async (dataLogin: object) => {
    const response: AxiosResponse = await api.post(
      `${configApi.apiUrl}/v1/login`,
      dataLogin,
      { withCredentials: true }
    );

    return { payload: response.data, status: response.status };
  }
);

// Criação do slice da API de login
const apiLoginSlice = createSlice({
  name: "apiLogin",
  initialState,
  reducers: {
    // Reducer para realizar o logout
    logout(state) {
      state = initialState; // Reinicializa o estado para o estado inicial
      return state;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(doLogin.pending, (state) => {
        // Quando a requisição está em andamento
        state.loading = true;
        state.error = "";
        state.isSucess = false;
      })
      .addCase(doLogin.fulfilled, (state, action) => {
        // Quando a requisição é bem-sucedida
        state.loading = false;
        state.data = action.payload;
        state.isAdmin = action.payload.payload.isAdmin;
        if (action.payload.status === 200) {
          state.isSucess = true;
        }
      })
      .addCase(doLogin.rejected, (state, action) => {
        // Quando a requisição é rejeitada (ocorre um erro)
        state.loading = false;
        state.error = action.error.message ?? "";
        state.isSucess = false;
      });
  },
});

// Exportação das actions e reducer da API de login
export const { logout } = apiLoginSlice.actions;
export const { reducer: apiLoginReducer } = apiLoginSlice;
export default apiLoginSlice;
