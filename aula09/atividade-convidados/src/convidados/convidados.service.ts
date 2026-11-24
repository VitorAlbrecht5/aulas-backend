import { Injectable, NotFoundException } from '@nestjs/common';
import { UpdateConvidadoDto } from './dto/update-convidado.dto.js';

@Injectable()
export class ConvidadosService {
  private convidados = [
    { id: 1, nome: 'Ana', idade: 28, email: 'ana@email.com' },
    { id: 2, nome: 'Bruno', idade: 17, email: 'bruno@email.com' },
  ];

  findAll() {
    return this.convidados;
  }

  create(dados: any) {
    const novo = {
      id: this.convidados.length + 1,
      ...dados,
    };

    this.convidados.push(novo);
    return novo;
  }

  findOne(id: number) {
    const c = this.convidados.find((x) => x.id === id);

    if (!c) {
      throw new NotFoundException(`Convidado ${id} não encontrado`);
    }

    return c;
  }

  replace(id: number, dados: any) {
    const atual = this.findOne(id);
    const i = this.convidados.indexOf(atual);

    this.convidados[i] = { id, ...dados };

    return this.convidados[i];
  }

  update(id: number, dados: UpdateConvidadoDto) {
    const atual = this.findOne(id);
    return Object.assign(atual, dados);
  }

  remove(id: number) {
    this.findOne(id);

    this.convidados = this.convidados.filter((x) => x.id !== id);
  }
}
