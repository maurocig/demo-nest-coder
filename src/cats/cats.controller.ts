import { Body, Controller, Get, Post } from '@nestjs/common';
import { createCatDto } from 'src/dtos/create-cat.dto';
import { Cat } from 'src/interfaces/cat/cat.interface';
import { CatsService } from './cats.service';

@Controller('api/cats')
export class CatsController {
  constructor(private catService: CatsService) {}

  @Post()
  async create(@Body() createCatPayload: createCatDto) {
    this.catService.createCat(createCatPayload);
  }

  @Get('/algo')
  async get(): Promise<Cat[]> {
    return this.catService.getAll();
  }
}
