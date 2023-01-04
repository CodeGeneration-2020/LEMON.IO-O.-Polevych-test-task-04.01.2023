import axios from 'axios';
import { HttpService } from './http.service';

export class HttpFactoryService {
  createHttpService() {
    return new HttpService(axios);
  }

  createAuthHttpService() {
    return new HttpService(axios);
  }
}
