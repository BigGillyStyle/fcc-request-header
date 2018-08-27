import { Controller, Get, Req } from '@nestjs/common';

@Controller('api/whoami')
export class WhoamiController {
  @Get()
  findAll(@Req() req) {
    return {
      ipaddress: req.ip,
      language: req.get('Accept-Language'),
      software: req.get('User-Agent'),
    };
  }
}
