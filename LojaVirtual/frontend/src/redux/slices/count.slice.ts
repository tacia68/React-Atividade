import { createSlice } from "@reduxjs/toolkit";

// Criação do slice de estado "countSlice"
export const countSlice = createSlice({
  // Nome do slice
  name: "countSlice",

  // Estado inicial do slice
  initialState: {
    value: 0, // Valor inicial do contador
  },

  // Reducers, que são funções para manipular o estado
  reducers: {
    // Reducer para incrementar o valor do contador em 1
    increment(state) {
      state.value += 1;
    },
  },
});

// Exportação da action "increment"
export const { increment } = countSlice.actions;

// Exportação do reducer do slice "countSlice"
export default countSlice.reducer;
