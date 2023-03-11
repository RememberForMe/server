import { Args, Context, Mutation, Resolver } from '@nestjs/graphql';
import { AuthService } from './auth.service';
import { AuthInput } from './dto/auth.input';
import Auth from './entities/auth.object';
import { LoginResponseDTO } from './dto/login-response.dto';
import { UseGuards } from '@nestjs/common';
import { GqlAuthGuard } from './guards/gql-auth.guard';
import Accounts from '../accounts/entities/account.entity';

@Resolver(() => Auth)
export class AuthResolver {
    constructor (
        private readonly authService: AuthService,
    ) { }

    @Mutation(() => LoginResponseDTO)
    @UseGuards(GqlAuthGuard)
    async login(
        @Args('loginInput') loginInput: AuthInput,
        @Context() context
    ) {
        return this.authService.login(context.user)
    }

    @Mutation(() => Accounts)
    async register(
        @Args('registerInput') registerInput: AuthInput
    ) {
        return this.authService.register(registerInput)
    }
}
