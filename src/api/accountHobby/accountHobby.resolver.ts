import { Query, Resolver } from '@nestjs/graphql';
import AccountHobby from './entities/accountHobby.entity';

@Resolver(() => AccountHobby)
export class AccountHobbyResolver {
    @Query(() => String)
    helloAccountHobby(): string {
        return 'account hobby'
    }
}
