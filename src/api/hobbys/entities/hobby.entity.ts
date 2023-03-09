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
import { Accounts } from 'src/api/accounts/entities/account.entity';
import { AccountHobby } from 'src/api/account_hobby/entities/account_hobby.entity';

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

    @BelongsToMany(() => Accounts, () => AccountHobby)
    accounts: Accounts[];
}
