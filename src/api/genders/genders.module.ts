import { Module, forwardRef } from '@nestjs/common';
import { GendersService } from './genders.service';
import { GendersResolver } from './genders.resolver';
import { SequelizeModule } from '@nestjs/sequelize';
import Genders from './entities/gender.entity';
import { ProfilesModule } from '../profiles/profiles.module';

@Module({
  imports: [
    SequelizeModule.forFeature([Genders]),
    forwardRef(() => ProfilesModule)
  ],
  providers: [GendersResolver, GendersService],
  exports: [GendersService]
})
export class GendersModule { }
