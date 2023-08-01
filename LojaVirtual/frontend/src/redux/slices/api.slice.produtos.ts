/*src/redux/slices/api.slice.produtos.ts*/
import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import axios, { AxiosResponse } from "axios";
import { configApi } from "../../constans";
import { api } from "../../services/instanceAxios";

export interface Produto {
  id?: string;
  nome: string;
  preco: number;
  estoque: number;
  createdAt?: string;
  updatedAt?: string;
}

interface ApiState {
  loading: boolean;
  produtos: Produto[];
  error: string;
}

const initialState: ApiState = {
  loading: false,
  produtos: [],
  error: "",
};

export const fetchProdutos = createAsyncThunk<Produto[]>(
  "api/get/produtos",
  async () => {
    const wait = (ms: number) => new Promise((res) => setTimeout(res, ms));
    await wait(1000);

    const response: AxiosResponse<Produto[]> = await axios.get(
      `${configApi.apiUrl}/v1/produto`
    );

    return response.data;
  }
);

export const addProduto = createAsyncThunk(
  "api/post/produto",
  async (produto: Produto) => {
    const wait = (ms: number) => new Promise((res) => setTimeout(res, ms));
    await wait(1000);

    const response: AxiosResponse<Produto> = await api.post(
      `${configApi.apiUrl}/v1/produto`,
      produto,
      { withCredentials: true }
    );

    return response.data;
  }
);

export const updateProduto = createAsyncThunk(
  "api/put/produto",
  async (produto: Produto) => {
    const wait = (ms: number) => new Promise((res) => setTimeout(res, ms));
    await wait(1000);

    const response: AxiosResponse<Produto> = await api.put(
      `${configApi.apiUrl}/v1/produto/${produto.id}`,
      produto,
      { withCredentials: true }
    );

    return response.data;
  }
);

export const removeProduto = createAsyncThunk(
  "api/delete/produto",
  async (produtoId: string) => {
    const wait = (ms: number) => new Promise((res) => setTimeout(res, ms));
    await wait(1000);

    await api.delete(`${configApi.apiUrl}/v1/produto/${produtoId}`, {
      withCredentials: true,
    });

    return produtoId;
  }
);

export const fetchProdutosList = createAsyncThunk<Produto[]>(
  "api/get/produtosList",
  async () => {
    const wait = (ms: number) => new Promise((res) => setTimeout(res, ms));
    await wait(1000);

    const response: AxiosResponse<Produto[]> = await axios.get(
      `${configApi.apiUrl}/v1/produto`
    );

    return response.data;
  }
);

const apiProdutoSlice = createSlice({
  name: "apiProduto",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProdutos.pending, (state) => {
        state.loading = true;
        state.error = "";
      })
      .addCase(
        fetchProdutos.fulfilled,
        (state, action: PayloadAction<Produto[]>) => {
          state.loading = false;
          state.produtos = action.payload;
        }
      )
      .addCase(fetchProdutos.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message ?? "";
      })
      .addCase(
        addProduto.fulfilled,
        (state, action: PayloadAction<Produto>) => {
          state.loading = false;
          state.produtos.push(action.payload);
        }
      )
      .addCase(
        updateProduto.fulfilled,
        (state, action: PayloadAction<Produto>) => {
          state.loading = false;
          const updatedIndex = state.produtos.findIndex(
            (produto) => produto.id === action.payload.id
          );
          if (updatedIndex !== -1) {
            state.produtos[updatedIndex] = action.payload;
          }
        }
      )
      .addCase(
        removeProduto.fulfilled,
        (state, action: PayloadAction<string>) => {
          state.loading = false;
          state.produtos = state.produtos.filter(
            (produto) => produto.id !== action.payload
          );
        }
      )
      .addCase(fetchProdutosList.fulfilled, (state, action: PayloadAction<Produto[]>) => {
        state.loading = false;
        state.produtos = action.payload;
      })
      .addCase(fetchProdutosList.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message ?? "";
      });
  },
});

export const { reducer: apiProdutoReducer } = apiProdutoSlice;
export default apiProdutoSlice;
