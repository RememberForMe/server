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
    ForeignKey,
    BeforeCreate,
} from 'sequelize-typescript';
import { ObjectType, Field, ID } from '@nestjs/graphql';
import * as bcrypt from 'bcrypt';
import AccountHobby from 'src/api/accountHobby/entities/accountHobby.entity';
import Hobbys from 'src/api/hobbys/entities/hobby.entity';
import Profiles from 'src/api/profiles/entities/profile.entity';
import Roles from 'src/api/roles/entities/role.entity';

@ObjectType()
@Table({ tableName: 'Accounts', timestamps: false })
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

    @Field()
    @Unique(true)
    @AllowNull(false)
    @Column({
        type: DataType.STRING(20)
    })
    username: string;

    @Field()
    @AllowNull(false)
    @Column({
        type: DataType.TEXT
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

    @Field()
    @ForeignKey(() => Roles)
    @AllowNull(false)
    @Column
    roleId: string; 

    @Field(() => Roles)
    @BelongsTo(() => Roles)
    role: Roles;

    @BeforeCreate
    static async hashPassword(instance: Accounts) {
        const saltOrRounds: number = 10;
        const salt = await bcrypt.genSalt(saltOrRounds)
        const hash = await bcrypt.hash(instance.password, salt)
        instance.password = hash
    }
}
