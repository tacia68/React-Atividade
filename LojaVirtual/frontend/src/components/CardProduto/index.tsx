/*\src\components\CardProduto\index.tsx*/

// Importando módulos e componentes necessários
import React from 'react';
import { useDispatch } from 'react-redux';
import { Button, Card, CardActions, CardContent, CardMedia, Typography, Box } from '@mui/material';

// Importando a ação Redux para adicionar o nome de um produto ao carrinho
import { addProdutoNome } from '../../redux/slices/carrinho.slice';
import { Produto } from '../../redux/slices/api.slice.produtos';
import { configApi } from '../../constans';

// Definindo as props para o componente CardProduto
interface CardProdutoProps {
   children?: React.ReactNode;
   product?: Produto;
}

// Definindo o componente CardProduto como um componente funcional
const CardProduto: React.FC<CardProdutoProps> = ({ children, product, ...props }) => {
   // Obtendo a função de dispatch do Redux para despachar ações
   const dispatch = useDispatch();
   
   // Função para adicionar o nome de um produto ao carrinho quando o botão "Inserir no Carrinho" é clicado
   function inserirCarrinho(name: string) {
      dispatch(addProdutoNome(name));
   }

   // Código JSX para o componente CardProduto
   return (
      <Box sx={{ width: '100%', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <Card {...props} sx={{ maxWidth: 290}}>
         {/* CardMedia exibindo uma imagem de espaço reservado */}
         <CardMedia
         sx={{ height: 100 }}
         image={configApi.photoUrl} // A fonte da imagem é obtida da constante "configApi"
         title="green iguana" // O título da imagem
         />
         {/* CardContent exibindo as informações do produto */}
         <CardContent>
            {/* Nome do produto */}
            <Typography gutterBottom variant="h5" component="div">
               {product?.nome}
            </Typography>
            {/* Preço do produto */}
            <Typography variant="body2" color="text.secondary">
               <b>Preço:</b>{" "}R${" "}{product?.preco}
            </Typography>
            {/* Estoque/quantidade do produto */}
            <Typography variant="body2" color="text.secondary">
               <b>Estoque:</b>{product?.estoque}
            </Typography>
         </CardContent>
         {/* CardActions contendo o botão para adicionar o produto ao carrinho */}
         <CardActions>
            {/* Botão para adicionar o produto ao carrinho */}
            <Button color="error" className='font' size="small"
               onClick={() => {
                  // Quando o botão é clicado, a função "inserirCarrinho" é chamada com o nome do produto como argumento
                  inserirCarrinho(product!.nome); // O "!" é usado porque assume que o produto não é nulo (não recomendado em código real)
               }} 
            >Inserir no Carrinho</Button>
            {/* <Button size="small">Learn More</Button> */}
         </CardActions>
      </Card>
      </Box>
   )
}

// Exportando o componente CardProduto como exportação padrão
export default CardProduto;
