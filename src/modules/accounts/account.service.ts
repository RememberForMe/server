import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/sequelize";
import { Accounts } from "src/models/account.model";

@Injectable()
export class AccountsService {
    constructor(
        @InjectModel(Accounts)
        private accountModel: typeof Accounts
    ) {}
}