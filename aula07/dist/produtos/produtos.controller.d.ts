export declare class ProdutosController {
    listarTodos(): {
        id: number;
        nome: string;
        categoria: string;
    }[];
    filtrarPorCategoria(categoria: string): string;
}
