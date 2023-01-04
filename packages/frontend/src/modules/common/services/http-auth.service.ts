import { IHttpConfig } from '../types';
import { HttpService } from './http.service';
import { IMap } from './types';

export class EnhancedWithAuthHttpService {
  constructor(private httpService: HttpService, readonly tokenSlug: string) {}

  public createQueryLink(base: string, parameters: IMap) {
    return this.httpService.createQueryLink(base, parameters);
  }

  public async get<R>(url: string, config: IHttpConfig = {}): Promise<R> {
    return this.httpService.get<R>(url, await this.attachAuthHeader(config));
  }

  public async post<R, D>(
    url: string,
    data: D,
    config: IHttpConfig = {},
  ): Promise<R> {
    return this.httpService.post<R, D>(
      url,
      data,
      await this.attachAuthHeader(config),
    );
  }

  public async put<R, D>(
    url: string,
    data: D,
    config: IHttpConfig = {},
  ): Promise<R> {
    return this.httpService.put<R, D>(
      url,
      data,
      await this.attachAuthHeader(config),
    );
  }

  public async patch<R, D>(
    url: string,
    data: D,
    config: IHttpConfig = {},
  ): Promise<R> {
    return this.httpService.patch<R, D>(
      url,
      data,
      await this.attachAuthHeader(config),
    );
  }

  public async delete<R>(url: string, config: IHttpConfig = {}): Promise<R> {
    return this.httpService.delete<R>(url, await this.attachAuthHeader(config));
  }

  private async attachAuthHeader(config: IHttpConfig): Promise<IHttpConfig> {
    return {
      ...config,
      headers: {
        ...config.headers,
        ...(await this.populateTokenToHeaderConfig()),
      },
    };
  }

  private populateTokenToHeaderConfig(): object {
    return {
      Authorization: `Bearer ${localStorage.getItem(this.tokenSlug)}`,
    };
  }
}
