import {
  Controller,
  Get,
  Post,
  Put,
  Patch,
  Delete,
  Param,
  Body,
  HttpCode,
} from '@nestjs/common';

import { ConvidadosService } from './convidados.service.js';
import { UpdateConvidadoDto } from './dto/update-convidado.dto.js';

@Controller('convidados')
export class ConvidadosController {
  constructor(private readonly service: ConvidadosService) {}

  @Get()
  listar() {
    return this.service.findAll();
  }

  @Post()
  criar(@Body() dados: any) {
    return this.service.create(dados);
  }

  @Get(':id')
  buscar(@Param('id') id: string) {
    return this.service.findOne(+id);
  }

  @Put(':id')
  substituir(@Param('id') id: string, @Body() dados: any) {
    return this.service.replace(+id, dados);
  }

  @Patch(':id')
  atualizar(@Param('id') id: string, @Body() dados: UpdateConvidadoDto) {
    return this.service.update(+id, dados);
  }

  @Delete(':id')
  @HttpCode(204)
  remover(@Param('id') id: string) {
    this.service.remove(+id);
  }
}
