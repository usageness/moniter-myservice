import { Injectable } from '@nestjs/common';

import axios from 'axios';
import getServiceURLById from 'src/utils/getServiceURLById';

@Injectable()
export class StatusService {
  getMonitorStatus(): string {
    return Object.assign({ statusCode: 200 });
  }

  async getServiceStatus(id: string): Promise<string> {
    let status = -1;

    try {
      const response = await axios.get(getServiceURLById(id));

      status = response.status;
    } catch (err) {
      console.log(err);
    }

    return Object.assign({ statusCode: status });
  }
}
