import {
    Table,
    PrimaryKey,
    Column,
    Model,
    DataType,
    AllowNull,
    Unique,
    BelongsToMany
} from 'sequelize-typescript';
import { ObjectType, Field, ID } from '@nestjs/graphql';
import { Accounts } from 'src/api/accounts/entities/account.entity';
import { AccountHobby } from 'src/api/account_hobby/entities/account_hobby.entity';

@ObjectType()
@Table
export class Hobbys extends Model {
    @Field(() => ID)
    @PrimaryKey
    @Column({
        type: DataType.UUID,
        defaultValue: DataType.UUIDV4
    })
    id: string;

    @Field()
    @Column({
        type: DataType.STRING
    })
    @AllowNull(false)
    @Unique(true)
    name: string;

    @Field(() => [Accounts])
    @BelongsToMany(() => Accounts, () => AccountHobby)
    accounts: Accounts[];
}
