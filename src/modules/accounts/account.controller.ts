import { Controller } from "@nestjs/common";
import { AccountsService } from "./account.service";

@Controller('accounts')
export class AccountsController {
    constructor(private accountsService: AccountsService) {}
}