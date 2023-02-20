import { Injectable } from '@nestjs/common';

@Injectable()
export class StatusService {
  getMonitorStatus(): string {
    return JSON.stringify({ statusCode: 200 });
  }
}
