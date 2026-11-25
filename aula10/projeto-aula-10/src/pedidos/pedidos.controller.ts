// Slide 9
import {
  Controller,
  Get,
  Param,
  Query,
  ParseIntPipe,
  NotFoundException,
} from '@nestjs/common';

@Controller('pedidos')
export class PedidosController {
  private pedidos = [
    {
      id: 5,
      cliente: 'Ana',
      itens: [
        { id: 1, produto: 'Notebook', preco: 3500 },
        { id: 2, produto: 'Mouse Sem Fio', preco: 120 },
      ],
    },
  ];

  findPedido(pedidoId: number) {
    const pedido = this.pedidos.find((p) => p.id === pedidoId);
    if (!pedido)
      throw new NotFoundException(`Pedido ${pedidoId} não encontrado`);
    return pedido;
  }
  //   Slide 9
  @Get(':pedidoId/itens/:itemId')
  buscarItem(
    @Param('pedidoId', ParseIntPipe) pedidoId: number,
    @Param('itemId', ParseIntPipe) itemId: number,
  ) {
    const pedido = this.findPedido(pedidoId);
    const item = pedido.itens.find((i) => i.id === itemId);
    if (!item)
      throw new NotFoundException(`Item ${itemId} não pertence a este pedido`);
    return item;
  }
}
