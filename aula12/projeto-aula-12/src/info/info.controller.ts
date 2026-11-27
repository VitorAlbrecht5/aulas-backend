import { Controller, Get, Headers, Ip, UnauthorizedException } from '@nestjs/common';

@Controller('info')
export class InfoController {
  @Get()
  quemSouEu(@Headers('user-agent') agente: string, @Ip() ip: string) {
    return { agente, ip };
  }

  @Get('todos')
  todos(@Headers() headers: Record<string, string>) {
    return headers;
  }
  
  @Get('secreto')
  secreto(@Headers('x-api-key') chave?: string) {
    if (chave !== 'SENAI-2026') {
      throw new UnauthorizedException('Chave inválida');
    }
    return { conteudo: 'Conteúdo Secreto' };
  }
}
