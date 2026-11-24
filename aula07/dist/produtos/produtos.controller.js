var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
import { Controller, Get, Query } from '@nestjs/common';
let ProdutosController = class ProdutosController {
    listarTodos() {
        return [
            { id: 1, nome: 'Notebook', categoria: 'eletronicos' },
            { id: 2, nome: 'Mouse', categoria: 'eletronicos' },
            { id: 3, nome: 'Cadeira', categoria: 'moveis' },
        ];
    }
    filtrarPorCategoria(categoria) {
        console.log(`Filtrando por: ${categoria}`);
        return `Buscando produtos da categoria: ${categoria}`;
    }
};
__decorate([
    Get(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ProdutosController.prototype, "listarTodos", null);
__decorate([
    Get('filtrar'),
    __param(0, Query('categoria')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ProdutosController.prototype, "filtrarPorCategoria", null);
ProdutosController = __decorate([
    Controller('produtos')
], ProdutosController);
export { ProdutosController };
//# sourceMappingURL=produtos.controller.js.map