import { Module } from '@nestjs/common';
import { AppController } from './app.controller.js';
import { AppService } from './app.service.js';
import { ProdutosController } from './produtos/produtos.controller.js';
import { UsuariosController } from './usuarios/usuarios.controller.js';
import { ConvidadosController } from './convidados/convidados.controller.js';

@Module({
  imports: [],
  controllers: [AppController, ProdutosController, UsuariosController, ConvidadosController],
  providers: [AppService],
})
export class AppModule {}
