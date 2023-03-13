import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import Genders from './entities/gender.entity';

@Injectable()
export class GendersService {
  constructor(
    @InjectModel(Genders)
    private readonly genderModel: typeof Genders
  ) { }

  async findOneById(id: string) {
    return await this.genderModel.findByPk(id)
  }

  async findAll(): Promise<Genders[]> {
    return await this.genderModel.findAll()
  }
}
