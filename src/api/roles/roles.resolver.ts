import { Query, Resolver } from '@nestjs/graphql';
import Roles from './entities/role.entity';

@Resolver(() => Roles)
export class RolesResolver {
    @Query(() => String)
    helloRole(): string {
        return 'role'
    }
}
