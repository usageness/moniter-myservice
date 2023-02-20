import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getMonitorStatus(): string {
    return JSON.stringify({ statusCode: 200 });
  }
}
