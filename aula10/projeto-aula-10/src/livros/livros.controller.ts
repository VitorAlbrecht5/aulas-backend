// Slides 5, 6, 7, 12 e 13

import {
  Controller,
  Get,
  Param,
  Query,
  ParseIntPipe,
  NotFoundException,
} from '@nestjs/common';

@Controller('livros')
export class livrosController {
  // Slide 12
  private livros = [
    {
      id: 1,
      titulo: 'Dom Casmurro',
      autor: 'Machado de Assis',
      autorId: '10',
      ano: 1899,
    },
    {
      id: 2,
      titulo: 'Memórias Póstumas de Brás Cubas',
      autor: 'Machado de Assis',
      autorId: '10',
      ano: 1881,
    },
    {
      id: 3,
      titulo: 'O Alienista',
      autor: 'Machado de Assis',
      autorId: '10',
      ano: 1882,
    },
    {
      id: 4,
      titulo: 'A Hora da Estrela',
      autor: 'Clarice Lispector',
      autorId: '20',
      ano: 1977,
    },
    {
      id: 5,
      titulo: 'CódigoLimpo',
      autor: 'Robert C. Martin',
      autorId: '30',
      ano: 2008,
    },
  ];

  //  Slide 7 e 12
  @Get()
  listar(@Query('autor') autor?: string, @Query('ano') ano?: string) {
    let lista = this.livros;
    if (autor) {
      lista = lista.filter((l) =>
        l.autor.toLowerCase().includes(autor.toLowerCase()),
      );
    }
    if (ano) {
      lista = lista.filter((l) => l.ano === +ano);
    }
    return lista;
  }

  //   Slide 13
  @Get('autores/:autorId/livros/:livroId')
  buscarDoAutor(
    @Param('autorId', ParseIntPipe) autorId: number,
    @Param('livroId', ParseIntPipe) livroId: number,
  ) {
    const livro = this.livros.find(
      (l) => l.id === livroId && l.autorId === String(autorId),
    );
    if (!livro) {
      throw new NotFoundException(
        `Livro ${livroId} do autor ${autorId} não localizado em nosso acervo`,
      );
    }
    return livro;
  }
  // Slides 5, 6 e 12
  @Get(':id')
  buscar(@Param('id', ParseIntPipe) id: number) {
    const livro = this.livros.find((l) => l.id === id);
    if (!livro) {
      throw new NotFoundException(
        `Livro com ID ${id} não localizado em nosso acervo`,
      );
    }
    return livro;
  }
}
