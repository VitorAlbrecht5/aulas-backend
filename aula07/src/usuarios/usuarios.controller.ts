import { Body, Controller, Post } from '@nestjs/common';
import { CreateUsuarioDto } from './dto/create-usuario.dto.js';

@Controller('usuarios')
export class UsuariosController {
  @Post()
  criar(@Body() dados: CreateUsuarioDto) {
    console.log('Novo usuário:', dados.nome);
    return { mensagem: `Usuário ${dados.nome} criado!`, dados };
  }
}
