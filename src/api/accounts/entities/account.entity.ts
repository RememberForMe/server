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
import AccountHobby from 'src/api/accountHobby/entities/accountHobby.entity';
import Hobbys from 'src/api/hobbys/entities/hobby.entity';
import Profiles from 'src/api/profiles/entities/profile.entity';
import Roles from 'src/api/roles/entities/role.entity';

@ObjectType()
@Table
export default class Accounts extends Model {
    @Field(() => ID)
    @PrimaryKey
    @Column({
        type: DataType.UUID,
        defaultValue: DataType.UUIDV4
    })
    id: string;

    @Field({ nullable: true })
    @AllowNull(true)
    @Column({
        type: DataType.TEXT
    })
    email: string;

    @Field({ nullable: false })
    @Unique(true)
    @AllowNull(false)
    @Column({
        type: DataType.STRING(20)
    })
    username: string;

    @Field({ nullable: false })
    @AllowNull(false)
    @Column({
        type: DataType.STRING(10)
    })
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
    @AllowNull(false)
    @Column
    roleId: string; 

    @Field(() => Roles)
    @BelongsTo(() => Roles)
    role: Roles;
}
