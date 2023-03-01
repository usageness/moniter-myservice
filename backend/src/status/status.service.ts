import { Injectable } from '@nestjs/common';

import axios from 'axios';
import getServiceURLById, { serviceList } from 'src/utils/getServiceURLById';

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

  async getServiceStatusAll(): Promise<string> {
    const statusArray = { services: [] };

    try {
      const serviceListArray = Object.entries(serviceList);
      const responseArray = await Promise.all(
        serviceListArray.map(async ([key]) => {
          const response = await axios.get(getServiceURLById(key));
          return { name: key, statusCode: response.status };
        }),
      );

      statusArray.services = responseArray;
    } catch (err) {
      console.log(err);
    }

    return Object.assign(statusArray);
  }
}
