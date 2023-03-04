import { Module } from "@nestjs/common";
import { SequelizeModule } from "@nestjs/sequelize";
import { Profiles } from "src/models/profile.model";
import { ProfilesController } from "./profile.controller";
import { ProfilesService } from "./profile.service";

@Module({
    imports: [SequelizeModule.forFeature([Profiles])],
    providers: [ProfilesService],
    controllers: [ProfilesController],
    exports: [SequelizeModule]
})
export class ProfilesModule {

}