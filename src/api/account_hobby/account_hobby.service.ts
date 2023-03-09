import { Injectable } from '@nestjs/common';
import { CreateAccountHobbyDto } from './dto/create-account_hobby.dto';
import { UpdateAccountHobbyDto } from './dto/update-account_hobby.dto';

@Injectable()
export class AccountHobbyService {
  create(createAccountHobbyDto: CreateAccountHobbyDto) {
    return 'This action adds a new accountHobby';
  }

  findAll() {
    return `This action returns all accountHobby`;
  }

  findOne(id: number) {
    return `This action returns a #${id} accountHobby`;
  }

  update(id: number, updateAccountHobbyDto: UpdateAccountHobbyDto) {
    return `This action updates a #${id} accountHobby`;
  }

  remove(id: number) {
    return `This action removes a #${id} accountHobby`;
  }
}
