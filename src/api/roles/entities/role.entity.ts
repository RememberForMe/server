import {
    Table,
    Model,
    Column,
    DataType,
    PrimaryKey,
    AllowNull,
    Unique,
    HasMany
} from 'sequelize-typescript';
import { ObjectType, Field, ID } from '@nestjs/graphql';
import Accounts from 'src/api/accounts/entities/account.entity';

@ObjectType()
@Table
export default class Roles extends Model {
    @Field(() => ID)
    @PrimaryKey
    @Column({
        type: DataType.UUID,
        defaultValue: DataType.UUIDV4,
    })
    id: string;

    @Field()
    @AllowNull(false)
    @Unique(true)
    @Column({
        type: DataType.STRING(20)
    })
    name: string;

    @Field(() => [Accounts])
    @HasMany(() => Accounts)
    accounts: Accounts[];
}
