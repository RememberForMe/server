import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import Profiles from './entities/profile.entity';

@Injectable()
export class ProfilesService {
    constructor(
        @InjectModel(Profiles)
        private readonly profileModel: typeof Profiles
    ) { }

    async findOneByAccountId(id: string) {
        return await this.profileModel.findOne({
            where: {
                accountId: id
            }
        })
    }

    async findAllByGenderId(id: string) {
        return await this.profileModel.findAll({
            where: {
                genderId: id
            }
        })
    }
}
