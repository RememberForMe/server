import {
    Table,
    Model,
    Column,
    DataType,
    PrimaryKey,
    AllowNull,
    Unique,
    HasMany
} from 'sequelize-typescript'
import { Accounts } from './account.model';

@Table
export class Roles extends Model {
    @PrimaryKey
    @Column({
        type: DataType.UUID,
        defaultValue: DataType.UUIDV4,
    })
    id: string;

    @Column({
        type: DataType.STRING(20)
    })
    @AllowNull(false)
    @Unique(true)
    name: string;

    @HasMany(() => Accounts)
    accounts: Accounts[];
}