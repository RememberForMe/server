import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateAccountInput } from './dto/create-account.input';
import Accounts from './entities/account.entity';

@Injectable()
export class AccountsService {
    constructor(
        @InjectModel(Accounts)
        private readonly accountModel: typeof Accounts,
    ) {}

    async findAll(): Promise<Accounts[]> {
        return this.accountModel.findAll()
    }

    async createNewRecord(data: CreateAccountInput) {
        let user = await this.accountModel.findOne({
            where: { username: data.username }
        })

        if (user) {
            throw new HttpException('the user already exists', HttpStatus.BAD_REQUEST)
        }

        user = await this.accountModel.create({
            username: data.username,
            password: data.password,
            roleId: data.roleId
        })
        
        return user
    }
}
