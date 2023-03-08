import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Hobbys } from 'src/models/hobby.model';

@Injectable()
export class HobbysService {
    constructor(
        @InjectModel(Hobbys)
        private hobbyModel: typeof Hobbys
    ) {}
}