import { Injectable } from '@nestjs/common';

@Injectable()
export class StatusService {
  getMonitorStatus(): string {
    return Object.assign({ statusCode: 200 });
  }
}
