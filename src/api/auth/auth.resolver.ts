import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { AccountsService } from '../accounts/accounts.service';
import { RolesService } from '../roles/roles.service';
import { AuthService } from './auth.service';
import { AuthInput } from './dto/auth.input';
import Auth from './entities/auth.object';

@Resolver(() => Auth)
export class AuthResolver {
    constructor (
        private readonly authService: AuthService,
        private readonly accountsService: AccountsService,
        private readonly rolesService: RolesService
    ) { }

    @Mutation(() => Auth)
    async register(@Args("input") input: AuthInput) {
        const role = await this.rolesService.findByName(input.role || 'user');
        const newAccount = await this.accountsService.createNewRecord({
            ...input,
            roleId: role.id
        });
        console.log(this.authService);
        return {
            username: newAccount.username
        };
    }
}
