import { Query, Resolver } from '@nestjs/graphql';
import Hobbys from './entities/hobby.entity';
import { HobbysService } from './hobbys.service';

@Resolver(() => Hobbys)
export class HobbysResolver {
    constructor(
        private readonly hobbysService: HobbysService
    ) {}

    @Query(() => [Hobbys])
    async hobbys(): Promise<Hobbys[]> {
        return this.hobbysService.findAll()
    }
}
