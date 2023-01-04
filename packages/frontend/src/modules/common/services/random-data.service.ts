import { IButton } from '../types';
import { HttpFactoryService } from './http-factory.service';
import { HttpService } from './http.service';

export class RandomDataService {
  constructor(private httpService: HttpService) {}

  public async getRandomArr(atr: string): Promise<IButton[] | number> {
    return await this.httpService.get(atr);
  }
}

const factory = new HttpFactoryService();
export const randomDataService = new RandomDataService(
  factory.createHttpService(),
);
