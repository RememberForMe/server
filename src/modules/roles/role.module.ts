import { Module } from "@nestjs/common";
import { SequelizeModule } from "@nestjs/sequelize";
import { Roles } from "src/models/role.model";
import { RolesController } from "./role.controller";
import { RolesService } from "./role.service";

@Module({
    imports: [SequelizeModule.forFeature([Roles])],
    providers: [RolesService],
    controllers: [RolesController],
    exports: [SequelizeModule]
})
export class RolesModule {

}