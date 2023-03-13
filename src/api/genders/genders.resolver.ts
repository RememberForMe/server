import { Resolver, Query, ResolveField, Parent } from '@nestjs/graphql';
import { GendersService } from './genders.service';
import Genders from './entities/gender.entity';
import Profiles from '../profiles/entities/profile.entity';
import { ProfilesService } from '../profiles/profiles.service';

@Resolver(() => Genders)
export class GendersResolver {
  constructor(
    private readonly gendersService: GendersService,
    private readonly profilesService: ProfilesService
  ) { }

  @Query(() => [Genders])
  async genders() {
    return await this.gendersService.findAll()
  }

  @ResolveField('profiles', () => [Profiles])
  async getProfiles(@Parent() gender: Genders): Promise<Profiles[]> {
    const { id } = gender
    return await this.profilesService.findAllByGenderId(id)
  }
}
