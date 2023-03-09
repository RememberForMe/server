import { Module } from '@nestjs/common';
import { HobbysService } from './hobbys.service';
import { HobbysController } from './hobbys.controller';
import { HobbysResolver } from './hobbys.resolver';

@Module({
  controllers: [HobbysController],
  providers: [HobbysService, HobbysResolver]
})
export class HobbysModule {}
