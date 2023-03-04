import { Module } from "@nestjs/common";
import { SequelizeModule } from "@nestjs/sequelize";
import { Accounts } from "src/models/account.model";
import { AccountsController } from "./account.controller";
import { AccountsService } from "./account.service";

@Module({
    imports: [SequelizeModule.forFeature([Accounts])],
    providers: [AccountsService],
    controllers: [AccountsController],
    exports: [SequelizeModule]
})
export class AccountsModule {

}