import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service.js';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('sobre')
  sobre() {
    return {
      curso: 'Programador Full-Stack',
      aula: 7
    };
  }
}
