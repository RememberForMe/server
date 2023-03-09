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
import Accounts from 'src/api/accounts/entities/account.entity';
import AccountHobby from 'src/api/accountHobby/entities/accountHobby.entity';

@ObjectType()
@Table
export default class Hobbys extends Model {
    @Field(() => ID)
    @PrimaryKey
    @Column({
        type: DataType.UUID,
        defaultValue: DataType.UUIDV4
    })
    id: string;

    @Field()
    @AllowNull(false)
    @Unique(true)
    @Column({
        type: DataType.STRING
    })
    name: string;

    @Field(() => [Accounts])
    @BelongsToMany(() => Accounts, () => AccountHobby)
    accounts: Accounts[];
}
