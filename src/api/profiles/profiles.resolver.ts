import { Query, Resolver } from '@nestjs/graphql';
import Profiles from './entities/profile.entity';

@Resolver(() => Profiles)
export class ProfilesResolver {
    @Query(() => String)
    helloProfile(): string {
        return 'profile'
    }
}
