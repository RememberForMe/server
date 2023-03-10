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
import AccountHobby from 'src/api/accountHobby/entities/accountHobby.entity';
import Hobbys from 'src/api/hobbys/entities/hobby.entity';
import Profiles from 'src/api/profiles/entities/profile.entity';
import Roles from 'src/api/roles/entities/role.entity';
import { createCipheriv, randomBytes, scrypt } from 'crypto';
import { promisify } from 'util';

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

    @Field({ nullable: false })
    @ForeignKey(() => Roles)
    @AllowNull(false)
    @Column
    roleId: string; 

    @Field(() => Roles)
    @BelongsTo(() => Roles)
    role: Roles;

    @BeforeCreate
    static async hashPassword(instance: Accounts) {
        const iv = randomBytes(16)
        const key = (await promisify(scrypt)('remember', 'salt', 32)) as Buffer
        const cipher = createCipheriv('aes-256-ctr', key, iv)
        instance.password = cipher.update(instance.password, 'utf-8', 'hex') + cipher.final('hex')
    }
}
