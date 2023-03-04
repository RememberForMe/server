import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/sequelize";
import { Profiles } from "src/models/profile.model";

@Injectable()
export class ProfilesService {
    constructor(
        @InjectModel(Profiles)
        private profileModel: typeof Profiles
    ) {}
}