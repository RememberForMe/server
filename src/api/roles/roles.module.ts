import { Module } from '@nestjs/common';
import { RolesService } from './roles.service';
import { RolesController } from './roles.controller';
import { RolesResolver } from './roles.resolver';
import { SequelizeModule } from '@nestjs/sequelize';
import Roles from './entities/role.entity';

@Module({
    imports: [SequelizeModule.forFeature([Roles])],
    controllers: [RolesController],
    providers: [RolesService, RolesResolver],
    exports: [RolesService]
})
export class RolesModule { }
