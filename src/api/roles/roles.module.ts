import { Module } from '@nestjs/common';
import { RolesService } from './roles.service';
import { RolesController } from './roles.controller';
import { RolesResolver } from './roles.resolver';

@Module({
  controllers: [RolesController],
  providers: [RolesService, RolesResolver]
})
export class RolesModule {}
