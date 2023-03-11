import { Query, Resolver } from '@nestjs/graphql';
import Accounts from './entities/account.entity';

@Resolver(() => Accounts)
export class AccountsResolver {
    @Query(() => String)
    helloAccount() {
        return 'hello'
    }
}
