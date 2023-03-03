import { Controller } from "@nestjs/common";
import { RolesService } from "./role.service";

@Controller('roles')
export class RolesController {
    constructor(private rolesService: RolesService) {}
}