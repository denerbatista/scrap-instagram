import { Controller, Get } from '@nestjs/common';
import { startHtml } from './utils/html/startHtml';

@Controller()
export class StatusController {
  @Get()
  status() {
    return startHtml();
  }
}
