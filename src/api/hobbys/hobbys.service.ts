import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import Hobbys from './entities/hobby.entity';

@Injectable()
export class HobbysService {
    constructor(
        @InjectModel(Hobbys)
        private readonly hobbyModel: typeof Hobbys
    ) {}

    async findAll(): Promise<Hobbys[]> {
        return this.hobbyModel.findAll()
    }
}
