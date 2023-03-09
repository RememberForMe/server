import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { HobbysService } from './hobbys.service';
import { CreateHobbyDto } from './dto/create-hobby.dto';
import { UpdateHobbyDto } from './dto/update-hobby.dto';

@Controller('hobbys')
export class HobbysController {
  constructor(private readonly hobbysService: HobbysService) {}

  @Post()
  create(@Body() createHobbyDto: CreateHobbyDto) {
    return this.hobbysService.create(createHobbyDto);
  }

  @Get()
  findAll() {
    return this.hobbysService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.hobbysService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateHobbyDto: UpdateHobbyDto) {
    return this.hobbysService.update(+id, updateHobbyDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.hobbysService.remove(+id);
  }
}
