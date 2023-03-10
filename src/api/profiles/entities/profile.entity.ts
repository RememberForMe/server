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
import Accounts from 'src/api/accounts/entities/account.entity';

@ObjectType()
@Table({ tableName: 'Profiles', timestamps: false })
export default class Profiles extends Model {
    @Field(() => ID)
    @PrimaryKey
    @Column({
        type: DataType.UUID,
        defaultValue: DataType.UUIDV4
    })
    id: string;

    @Field()
    @AllowNull(true)
    @Column({
        type: DataType.STRING(20)
    })
    firstName?: string;

    @Field({ nullable: true })
    @AllowNull(true)
    @Column({
        type: DataType.STRING(10)
    })
    lastName?: string;

    @Field({ nullable: true })
    @AllowNull(true)
    @Column({
        type: DataType.TEXT
    })
    address?: string;

    @Field({ nullable: true })
    @AllowNull(true)
    @Column({
        type: DataType.DATEONLY
    })
    birthday?: string;

    @Field({ nullable: false })
    @ForeignKey(() => Accounts)
    @AllowNull(false)
    @Column
    accountId: string;

    @Field(() => Accounts)
    @BelongsTo(() => Accounts)
    account: Accounts;
}
