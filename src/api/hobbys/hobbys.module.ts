import { Module } from '@nestjs/common';
import { HobbysService } from './hobbys.service';
import { HobbysController } from './hobbys.controller';
import { HobbysResolver } from './hobbys.resolver';
import { SequelizeModule } from '@nestjs/sequelize';
import Hobbys from './entities/hobby.entity';

@Module({
    imports: [
        SequelizeModule.forFeature([Hobbys])
    ],
    controllers: [HobbysController],
    providers: [HobbysService, HobbysResolver],
})
export class HobbysModule { }
