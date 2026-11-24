import { Controller, Get, Query } from '@nestjs/common';

@Controller('produtos')
export class ProdutosController {
  // SLIDE 6: Get http://localhost:3000/produtos
  @Get() // GET /produtos
  listarTodos() {
    return [
      { id: 1, nome: 'Notebook', categoria: 'eletronicos' },
      { id: 2, nome: 'Mouse', categoria: 'eletronicos' },
      { id: 3, nome: 'Cadeira', categoria: 'moveis' },
    ];
  }

  // SLIDE 7: Get: http://localhost:3000/produtos/filtrar?categoria=moveis
  @Get('filtrar')
  filtrarPorCategoria(@Query('categoria') categoria: string) {
    console.log(`Filtrando por: ${categoria}`);
    return `Buscando produtos da categoria: ${categoria}`;
  }
}
