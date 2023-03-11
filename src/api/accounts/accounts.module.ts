import { Module } from '@nestjs/common';
import { AccountsService } from './accounts.service';
import { AccountsController } from './accounts.controller';
import { AccountsResolver } from './accounts.resolver';
import { SequelizeModule } from '@nestjs/sequelize';
import Accounts from './entities/account.entity';
import { RolesModule } from '../roles/roles.module';
import { ProfilesModule } from '../profiles/profiles.module';

@Module({
    imports: [
        SequelizeModule.forFeature([Accounts]),
        RolesModule,
        ProfilesModule
    ],
    controllers: [AccountsController],
    providers: [AccountsService, AccountsResolver],
    exports: [AccountsService]
})
export class AccountsModule { }
