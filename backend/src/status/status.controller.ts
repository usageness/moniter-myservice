import { Controller, Get, Param } from '@nestjs/common';
import { StatusService } from './status.service';

@Controller('status')
export class StatusController {
  constructor(private readonly statusService: StatusService) {}

  @Get()
  getMonitorStatus(): string {
    return this.statusService.getMonitorStatus();
  }

  @Get('/all')
  getServiceStatusAll() {
    return this.statusService.getServiceStatusAll();
  }

  @Get(':id')
  getServiceStatus(@Param('id') id: string) {
    return this.statusService.getServiceStatus(id);
  }
}
