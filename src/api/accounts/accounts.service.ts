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

    async findOneByUsername(username: string) {
        return await this.accountModel.findOne({
            where: { username }
        })
    }

    async createNewRecord(data: CreateAccountInput) {
        let account = await this.findOneByUsername(data.username)

        if (account) {
            throw new HttpException('the user already exists', HttpStatus.BAD_REQUEST)
        }

        account = await this.accountModel.create({
            username: data.username,
            password: data.password,
            roleId: data.roleId
        })
        
        return account 
    }
}
