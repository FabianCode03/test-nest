import { HttpException, HttpStatus } from '@nestjs/common';

export class CatIsCrazyException extends HttpException {
  constructor() {
    super('Cat is crazy!', HttpStatus.I_AM_A_TEAPOT);
  }
}
