export interface IEstoque {
  id?: string,
  armazem_uuid: string;
  armazem_nome: string;
  produto_uuid: string;
  produto_nome: string;
  produto_unidade_medida: string;
  produto_marca: string;
  empresa: string;
  quantidade: string;
  preco: string;
}
