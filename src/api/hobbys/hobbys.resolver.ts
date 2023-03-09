import { Query, Resolver } from '@nestjs/graphql';
import Hobbys from './entities/hobby.entity';

@Resolver(() => Hobbys)
export class HobbysResolver {
    @Query(() => String)
    helloHobby(): string {
        return 'hobby'
    }
}
