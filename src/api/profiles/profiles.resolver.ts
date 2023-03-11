import { Parent, ResolveField, Resolver } from '@nestjs/graphql';
import { AccountsService } from '../accounts/accounts.service';
import Accounts from '../accounts/entities/account.entity';
import Profiles from './entities/profile.entity';

@Resolver(() => Profiles)
export class ProfilesResolver {
    constructor(
        private readonly accountsService: AccountsService
    ) {}

    @ResolveField('account', () => Accounts)
    async getAccount(@Parent() profile: Profiles) {
        const { accountId } = profile
        return await this.accountsService.findOneById(accountId)
    }
}
