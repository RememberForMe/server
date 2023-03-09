import { Module } from '@nestjs/common';
import { HobbysService } from './hobbys.service';
import { HobbysController } from './hobbys.controller';

@Module({
  controllers: [HobbysController],
  providers: [HobbysService]
})
export class HobbysModule {}
