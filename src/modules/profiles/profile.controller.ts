import { Controller } from "@nestjs/common";
import { ProfilesService } from "./profile.service";

@Controller('profiles')
export class ProfilesController {
    constructor(private profilesService: ProfilesService) {}
}