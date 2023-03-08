import {
    Table,
    PrimaryKey,
    Column,
    Model,
    DataType,
    AllowNull,
    Unique,
    BelongsToMany
} from 'sequelize-typescript'
import { Accounts } from './account.model';
import { AccountHobbys } from './AccountHobby.model';

@Table
export class Hobbys extends Model {
    @PrimaryKey
    @Column({
        type: DataType.UUID,
        defaultValue: DataType.UUIDV4
    })
    id: string;

    @Column({
        type: DataType.STRING
    })
    @AllowNull(false)
    @Unique(true)
    name: string;

    @BelongsToMany(() => Accounts, () => AccountHobbys)
    accounts: Accounts[];
}