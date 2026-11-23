import { AppService } from './app.service.js';
export declare class AppController {
    private readonly appService;
    constructor(appService: AppService);
    getHello(): string;
    sobre(): {
        curso: string;
        aula: number;
    };
}
