import { Resolver } from '@nestjs/graphql';
import { Profiles } from './entities/profile.entity';

@Resolver(() => Profiles)
export class ProfilesResolver {}
