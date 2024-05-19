export interface Usuario {
    id?: number;
    usuario: string;
    nome: string;
    empresa_uuid: string;
    empresa_nome: string;
    empresa_cnpj: string;
    tipo: string;
    logado: boolean;
}
