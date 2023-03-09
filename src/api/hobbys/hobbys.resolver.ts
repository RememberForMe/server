import { Resolver } from '@nestjs/graphql';
import { Hobbys } from './entities/hobby.entity';

@Resolver(() => Hobbys)
export class HobbysResolver {}
