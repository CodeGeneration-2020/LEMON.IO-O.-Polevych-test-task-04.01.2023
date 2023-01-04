import { Controller, Get } from '@nestjs/common';
import { NUMBERS, ROUTES } from './modules/common/constants';
import { getRandomNumber } from './modules/common/utils';

@Controller('/')
export class AppController {
  @Get()
  async getNumbers() {
    return NUMBERS;
  }

  @Get(ROUTES.result)
  async getResult() {
    return getRandomNumber();
  }
}
