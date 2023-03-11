import { Args, Parent, Query, ResolveField, Resolver } from '@nestjs/graphql';
import Profiles from '../profiles/entities/profile.entity';
import { ProfilesService } from '../profiles/profiles.service';
import Roles from '../roles/entities/role.entity';
import { RolesService } from '../roles/roles.service';
import { AccountsService } from './accounts.service';
import Accounts from './entities/account.entity';

@Resolver(() => Accounts)
export class AccountsResolver {
    constructor(
        private readonly accountsService: AccountsService,
        private readonly rolesService: RolesService,
        private readonly profilesService: ProfilesService
    ) {}

    @Query(() => Accounts, { nullable: true })
    async account(
        @Args('id') id: string
    ) {
        return await this.accountsService.findOneById(id)
    }

    @Query(() => [Accounts])
    async accounts() {
        return await this.accountsService.findAll()
    }

    @ResolveField('role', () => Roles)
    async getRole(@Parent() account: Accounts) {
        const { roleId } = account
        return await this.rolesService.findOneById(roleId)
    }

    @ResolveField('profile', () => Profiles, { nullable: true })
    async getProfile(@Parent() account: Accounts) {
        const { id } = account
        return await this.profilesService.findOneByAccountId(id)
    }
}
