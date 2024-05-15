import { useEffect, useState } from 'react';
import { buscar, deletar } from './services/service';
import './App.css';

const token = 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJyb290QHJvb3QuY29tIiwiaWF0IjoxNzE1NzM2OTI2LCJleHAiOjE3MTU3NDA1MjZ9.q83BUAFcGosW0JBm4cakvHaDkR_idWwszw54ky7DSZU';

type Tema = {
  id: number,
  descricao: string,
};

export const App = () => {
  const [temas, setTemas] = useState<Tema[]>([]);

  const apagar = async (id: number) => {
    await deletar(`/temas/${id}`, { headers: { Authorization: token } });
    await buscar('/temas', setTemas, { headers: { Authorization: token } });
  };

  useEffect(() => {
    buscar('/temas', setTemas, { headers: { Authorization: token } });
  }, []);

  return (
    <>
      {
        temas.length == 0 ?
          <h1>Carregando...</h1>
          :
          temas.map((tema) => (
            <div key={tema.id}>
              <h1>{tema.id}: {tema.descricao}</h1>
              <button onClick={ () =>apagar(tema.id) }>Excluir</button>
            </div>
          ))
      }
    </>
  );
}
