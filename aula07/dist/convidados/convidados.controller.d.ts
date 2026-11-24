import { CreateConvidadoDto } from './dto/create-convidado.dto.js';
export declare class ConvidadosController {
    listar(): string[];
    criar(dados: CreateConvidadoDto): {
        mensagem: string;
    };
}
