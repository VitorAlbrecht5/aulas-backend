import { CreateUsuarioDto } from './dto/create-usuario.dto.js';
export declare class UsuariosController {
    criar(dados: CreateUsuarioDto): {
        mensagem: string;
        dados: CreateUsuarioDto;
    };
}
