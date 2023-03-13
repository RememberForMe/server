import { Parent, ResolveField, Resolver } from '@nestjs/graphql';
import { AccountsService } from '../accounts/accounts.service';
import Accounts from '../accounts/entities/account.entity';
import Profiles from './entities/profile.entity';
import Genders from '../genders/entities/gender.entity';
import { GendersService } from '../genders/genders.service';

@Resolver(() => Profiles)
export class ProfilesResolver {
    constructor(
        private readonly accountsService: AccountsService,
        private readonly gendersService: GendersService
    ) { }

    @ResolveField('account', () => Accounts)
    async getAccount(@Parent() profile: Profiles) {
        const { accountId } = profile
        return await this.accountsService.findOneById(accountId)
    }

    @ResolveField('gender', () => Genders)
    async getGender(@Parent() profile: Profiles) {
        const { genderId } = profile
        return await this.gendersService.findOneById(genderId)
    }
}
