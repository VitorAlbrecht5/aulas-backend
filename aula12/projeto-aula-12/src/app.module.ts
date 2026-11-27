import { Module } from '@nestjs/common';
import { AppController } from './app.controller.js';
import { AppService } from './app.service.js';
import { InfoController } from './info/info.controller.js';
import { ConvidadosController } from './convidados/convidados.controller.js';
import { ConvidadosService } from './convidados/convidados.service.js';

@Module({
  imports: [],
  controllers: [AppController, InfoController, ConvidadosController],
  providers: [AppService, ConvidadosService],
})
export class AppModule {}
