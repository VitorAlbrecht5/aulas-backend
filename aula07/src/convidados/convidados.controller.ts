import { Controller, Get, Post, Body } from '@nestjs/common';
import { CreateConvidadoDto } from './dto/create-convidado.dto.js';

@Controller('convidados')
export class ConvidadosController {

  @Get()
  listar() {
    return ['Ana', 'Bruno', 'Carlos'];
  }

  @Post()
  criar(@Body() dados: CreateConvidadoDto) {

    console.log('Nome do convidado:', dados.nome);

    return {
      mensagem: `Convidado ${dados.nome} cadastrado com sucesso!`
    };
  }

}