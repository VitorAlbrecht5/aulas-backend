import { Module } from '@nestjs/common';
import { ConvidadosController } from './convidados/convidados.controller.js';
import { ConvidadosService } from './convidados/convidados.service.js';

@Module({
  imports: [],
  controllers: [ConvidadosController],
  providers: [ConvidadosService],
})
export class AppModule {}
