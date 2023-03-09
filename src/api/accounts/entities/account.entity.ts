import {
    Table,
    Column,
    PrimaryKey,
    Model,
    DataType,
    Unique,
    AllowNull,
    HasOne,
    BelongsToMany,
    BelongsTo,
    ForeignKey
} from 'sequelize-typescript';
import { ObjectType, Field, ID } from '@nestjs/graphql';
import { AccountHobby } from 'src/api/account_hobby/entities/account_hobby.entity';
import { Hobbys } from 'src/api/hobbys/entities/hobby.entity';
import { Profiles } from 'src/api/profiles/entities/profile.entity';
import { Roles } from 'src/api/roles/entities/role.entity';

@ObjectType()
@Table
export class Accounts extends Model {
    @Field(() => ID)
    @PrimaryKey
    @Column({
        type: DataType.UUID,
        defaultValue: DataType.UUIDV4
    })
    id: string;

    @Field({ nullable: true })
    @Column({
        type: DataType.TEXT
    })
    @AllowNull(true)
    email: string;

    @Field({ nullable: false })
    @Column({
        type: DataType.STRING(20)
    })
    @Unique(true)
    @AllowNull(false)
    username: string;

    @Field({ nullable: false })
    @Column({
        type: DataType.STRING(10)
    })
    @AllowNull(false)
    password: string;

    @Field({ defaultValue: true })
    @Column({
        type: DataType.BOOLEAN,
        defaultValue: true
    })
    isActived: boolean;

    @Field(() => Profiles)
    @HasOne(() => Profiles)
    profile: Profiles;

    @Field(() => [Hobbys])
    @BelongsToMany(() => Hobbys, () => AccountHobby)
    hobbys: Hobbys[];

    @Field({ nullable: false })
    @ForeignKey(() => Roles)
    @Column
    @AllowNull(false)
    roleId: string; 

    @Field(() => Roles)
    @BelongsTo(() => Roles)
    role: Roles;
}
