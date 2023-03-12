import { Injectable } from '@nestjs/common';
import { CreateGenderInput } from './dto/create-gender.input';
import { UpdateGenderInput } from './dto/update-gender.input';

@Injectable()
export class GendersService {
  create(createGenderInput: CreateGenderInput) {
    return 'This action adds a new gender';
  }

  findAll() {
    return `This action returns all genders`;
  }

  findOne(id: number) {
    return `This action returns a #${id} gender`;
  }

  update(id: number, updateGenderInput: UpdateGenderInput) {
    return `This action updates a #${id} gender`;
  }

  remove(id: number) {
    return `This action removes a #${id} gender`;
  }
}
