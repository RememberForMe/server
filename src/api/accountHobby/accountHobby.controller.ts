import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AccountHobbyService } from './accountHobby.service';
import { CreateAccountHobbyDto } from './dto/create-accountHobby.dto';
import { UpdateAccountHobbyDto } from './dto/update-accountHobby.dto';

@Controller('account-hobby')
export class AccountHobbyController {
  constructor(private readonly accountHobbyService: AccountHobbyService) {}

  @Post()
  create(@Body() createAccountHobbyDto: CreateAccountHobbyDto) {
    return this.accountHobbyService.create(createAccountHobbyDto);
  }

  @Get()
  findAll() {
    return this.accountHobbyService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.accountHobbyService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAccountHobbyDto: UpdateAccountHobbyDto) {
    return this.accountHobbyService.update(+id, updateAccountHobbyDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.accountHobbyService.remove(+id);
  }
}
