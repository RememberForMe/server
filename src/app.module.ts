import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { SequelizeConfig } from './config/sequelize.config';
import { RolesModule } from './modules/roles/role.module';
import { AccountsModule } from './modules/accounts/account.module';
import { ProfilesModule } from './modules/profiles/profile.module';

@Module({
    imports: [
        SequelizeModule.forRoot(SequelizeConfig),
        RolesModule,
        AccountsModule,
        ProfilesModule
    ],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule { }
