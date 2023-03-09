import {
    Table,
    Model,
    Column,
    ForeignKey
} from 'sequelize-typescript';
import { ObjectType, Field } from '@nestjs/graphql';
import { Accounts } from 'src/api/accounts/entities/account.entity';
import { Hobbys } from 'src/api/hobbys/entities/hobby.entity';

@ObjectType()
@Table
export class AccountHobby extends Model {
    @Field()
    @ForeignKey(() => Accounts)
    @Column
    accountId: string;

    @Field()
    @ForeignKey(() => Hobbys)
    @Column
    hobbyId: string;
}
