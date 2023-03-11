import { forwardRef, Module } from '@nestjs/common';
import { ProfilesService } from './profiles.service';
import { ProfilesController } from './profiles.controller';
import { ProfilesResolver } from './profiles.resolver';
import { SequelizeModule } from '@nestjs/sequelize';
import Profiles from './entities/profile.entity';
import { AccountsModule } from '../accounts/accounts.module';

@Module({
    imports: [
        SequelizeModule.forFeature([Profiles]),
        forwardRef(() => AccountsModule)
    ],
    controllers: [ProfilesController],
    providers: [ProfilesService, ProfilesResolver],
    exports: [ProfilesService]
})
export class ProfilesModule { }
