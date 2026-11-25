import { Module } from '@nestjs/common';
import { AppController } from './app.controller.js';
import { AppService } from './app.service.js';
import { LivosController } from './livos/livos.controller.js';
import { PedidosController } from './pedidos/pedidos.controller.js';

@Module({
  imports: [],
  controllers: [AppController, LivosController, PedidosController],
  providers: [AppService],
})
export class AppModule {}
