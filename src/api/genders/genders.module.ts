import { Module } from '@nestjs/common';
import { GendersService } from './genders.service';
import { GendersResolver } from './genders.resolver';

@Module({
  providers: [GendersResolver, GendersService]
})
export class GendersModule {}
