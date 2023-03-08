import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { Hobbys } from 'src/models/hobby.model';

@Module({
    imports: [SequelizeModule.forFeature([Hobbys])],
    providers: [],
    controllers: [],
    exports: []
})
export class HobbysModule {

}