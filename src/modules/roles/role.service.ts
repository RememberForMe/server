import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/sequelize";
import { Roles } from "src/models/role.model";

@Injectable()
export class RolesService {
    constructor(
        @InjectModel(Roles)
        private roleModel: typeof Roles
    ) {}
}