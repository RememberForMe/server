import {
    Table,
    Column,
    Model,
    PrimaryKey,
    DataType,
    AllowNull,
    ForeignKey,
    BelongsTo
} from 'sequelize-typescript';
import { ObjectType, Field, ID } from '@nestjs/graphql';
import { Accounts } from 'src/api/accounts/entities/account.entity';

@ObjectType()
@Table
export class Profiles extends Model {
    @Field(() => ID)
    @PrimaryKey
    @Column({
        type: DataType.UUID,
        defaultValue: DataType.UUIDV4
    })
    id: string;

    @Field()
    @Column({
        type: DataType.STRING(20)
    })
    @AllowNull(true)
    firstName?: string;

    @Field({ nullable: true })
    @Column({
        type: DataType.STRING(10)
    })
    @AllowNull(true)
    lastName?: string;

    @Field({ nullable: true })
    @Column({
        type: DataType.TEXT
    })
    @AllowNull(true)
    address?: string;

    @Field({ nullable: true })
    @Column({
        type: DataType.DATEONLY
    })
    @AllowNull(true)
    birthday?: string;

    @Field({ nullable: false })
    @ForeignKey(() => Accounts)
    @Column
    @AllowNull(false)
    accountId: string;

    @Field(() => Accounts)
    @BelongsTo(() => Accounts)
    account: Accounts;
}
