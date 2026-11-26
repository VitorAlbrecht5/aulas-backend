import { Module } from '@nestjs/common';
import { AppController } from './app.controller.js';
import { AppService } from './app.service.js';
import { livrosController } from './livros/livros.controller.js';
import { PedidosController } from './pedidos/pedidos.controller.js';

@Module({
  imports: [],
  controllers: [AppController, livrosController, PedidosController],
  providers: [AppService],
})
export class AppModule {}
