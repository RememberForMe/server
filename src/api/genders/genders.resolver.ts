import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { GendersService } from './genders.service';
import { Gender } from './entities/gender.entity';
import { CreateGenderInput } from './dto/create-gender.input';
import { UpdateGenderInput } from './dto/update-gender.input';

@Resolver(() => Gender)
export class GendersResolver {
  constructor(private readonly gendersService: GendersService) {}

  @Mutation(() => Gender)
  createGender(@Args('createGenderInput') createGenderInput: CreateGenderInput) {
    return this.gendersService.create(createGenderInput);
  }

  @Query(() => [Gender], { name: 'genders' })
  findAll() {
    return this.gendersService.findAll();
  }

  @Query(() => Gender, { name: 'gender' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.gendersService.findOne(id);
  }

  @Mutation(() => Gender)
  updateGender(@Args('updateGenderInput') updateGenderInput: UpdateGenderInput) {
    return this.gendersService.update(updateGenderInput.id, updateGenderInput);
  }

  @Mutation(() => Gender)
  removeGender(@Args('id', { type: () => Int }) id: number) {
    return this.gendersService.remove(id);
  }
}
