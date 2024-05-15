import axios from 'axios';

const api = axios.create({
  baseURL: 'https://blogpessoal-insp.onrender.com/',
});

export const buscar = async (url: string, setDados: Function, header: Object) => {
  const response = await api.get(url, header);
  setDados(response.data);
};

export const deletar = async (url: string, header: Object) => {
  await api.delete(url, header);
};
