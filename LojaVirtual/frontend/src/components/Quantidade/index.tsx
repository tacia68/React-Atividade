import React, { useState } from "react";
import { Button, Grid, Typography } from "@mui/material";

interface QuantityCounterProps {
   quantidadeInicial: number;
   quantidadeMaxima: number;
}

const QuantityCounter: React.FC<QuantityCounterProps> = ({ quantidadeInicial, quantidadeMaxima }) => {
  // Estado local para armazenar a quantidade atual
  const [quantidade, setQuantidade] = useState(quantidadeInicial);

  // Função para aumentar a quantidade quando o botão "+" é clicado
  const handleAumentar = () => {
    setQuantidade((prevQuantidade) => prevQuantidade + 1);
  };

  // Função para diminuir a quantidade quando o botão "-" é clicado
  const handleDiminuir = () => {
    // Verifica se a quantidade atual é maior que 0 antes de diminuir
    if (quantidade > 0) {
      setQuantidade((prevQuantidade) => prevQuantidade - 1);
    }
  };

  // Retorna o JSX do componente QuantityCounter
  return (
    <Grid container alignItems="center" spacing={2}>
      <Grid item >
        {/* Botão "-" para diminuir a quantidade */}
        <Button variant="contained" color="error" onClick={handleDiminuir}>
          -
        </Button>
      </Grid>
      <Grid item>
        {/* Exibe a quantidade atual */}
        <Typography variant="body1">{quantidade}</Typography>
      </Grid>
      <Grid item>
         {/* Botão "+" para aumentar a quantidade, mas só é mostrado se a quantidade atual for menor que a quantidade máxima */}
         { quantidade < quantidadeMaxima ? 
            (
               <Button variant="contained" color="success"   onClick={handleAumentar}>
               +
             </Button>
            )
         :
            (<></>)
         }
      </Grid>
    </Grid>
  );
};

// Exporta o componente QuantityCounter como a exportação padrão
export default QuantityCounter;
