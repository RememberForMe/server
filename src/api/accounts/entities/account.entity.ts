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
} from 'sequelize-typescript'
import { AccountHobby } from 'src/api/account_hobby/entities/account_hobby.entity';
import { Hobbys } from 'src/api/hobbys/entities/hobby.entity';
import { Profiles } from 'src/api/profiles/entities/profile.entity';
import { Roles } from 'src/api/roles/entities/role.entity';

@Table
export class Accounts extends Model {
    @PrimaryKey
    @Column({
        type: DataType.UUID,
        defaultValue: DataType.UUIDV4
    })
    id: string;

    @Column({
        type: DataType.TEXT
    })
    @AllowNull(true)
    email: string;

    @Column({
        type: DataType.STRING(20)
    })
    @Unique(true)
    @AllowNull(false)
    username: string;

    @Column({
        type: DataType.STRING(10)
    })
    @AllowNull(false)
    password: string;

    @Column({
        type: DataType.BOOLEAN,
        defaultValue: true
    })
    isActived: boolean;

    @HasOne(() => Profiles)
    profile: Profiles;

    @BelongsToMany(() => Hobbys, () => AccountHobby)
    hobbys: Hobbys[];

    @ForeignKey(() => Roles)
    @Column
    roleId: string; 

    @BelongsTo(() => Roles)
    role: Roles;
}
