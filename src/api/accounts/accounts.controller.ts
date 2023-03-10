import { 
    Controller, 
    Get, 
} from '@nestjs/common';
import { AccountsService } from './accounts.service';
import Accounts from './entities/account.entity';

@Controller('accounts')
export class AccountsController {
    constructor (private readonly accountsService: AccountsService) { }

    @Get()
    async findAll(): Promise<Accounts[]> {
        return this.accountsService.findAll()
    }
}
