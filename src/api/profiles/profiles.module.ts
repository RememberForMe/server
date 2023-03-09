import { Module } from '@nestjs/common';
import { ProfilesService } from './profiles.service';
import { ProfilesController } from './profiles.controller';
import { ProfilesResolver } from './profiles.resolver';

@Module({
  controllers: [ProfilesController],
  providers: [ProfilesService, ProfilesResolver]
})
export class ProfilesModule {}
