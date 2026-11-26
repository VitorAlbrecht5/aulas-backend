
import {
  Controller,
  Post,
  UploadedFile,
  UseInterceptors,
  BadRequestException,
} from '@nestjs/common';

import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { extname } from 'path';
import { v4 as uuid } from 'uuid';

@Controller('media')
export class MediaController {

  @Post('upload')
  @UseInterceptors(
    FileInterceptor('file', {
      storage: diskStorage({
        destination: './uploads',

        filename: (req, file, callback) => {
          const nome = uuid() + extname(file.originalname);
          callback(null, nome);
        },
      }),

      limits: {
        fileSize: 2 * 1024 * 1024,
      },

      fileFilter: (req, file, callback) => {
        if (
          file.mimetype !== 'image/jpeg' &&
          file.mimetype !== 'image/png'
        ) {
          return callback(
            new BadRequestException('Apenas JPG e PNG são permitidos'),
            false,
          );
        }

        callback(null, true);
      },
    }),
  )

  enviar(@UploadedFile() file: Express.Multer.File) {

    if (!file) {
      throw new BadRequestException('Envie uma imagem válida');
    }

    return {
      nome: file.filename,
      nomeOriginal: file.originalname,
      tipo: file.mimetype,
      tamanho: file.size,
      caminho: `/uploads/${file.filename}`,
    };
  }
}
