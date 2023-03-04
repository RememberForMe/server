import {
    Table,
    Column,
    PrimaryKey,
    Model,
    DataType,
    Unique,
    AllowNull,
    HasOne
} from 'sequelize-typescript'
import { Profiles } from './profile.model';

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
}