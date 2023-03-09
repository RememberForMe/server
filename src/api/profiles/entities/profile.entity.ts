import {
    Table,
    Column,
    Model,
    PrimaryKey,
    DataType,
    AllowNull,
    ForeignKey,
    BelongsTo
} from 'sequelize-typescript'
import { Accounts } from 'src/api/accounts/entities/account.entity';

@Table
export class Profiles extends Model {
    @PrimaryKey
    @Column({
        type: DataType.UUID,
        defaultValue: DataType.UUIDV4
    })
    id: string;

    @Column({
        type: DataType.STRING(20)
    })
    @AllowNull(true)
    firstName: string;

    @Column({
        type: DataType.STRING(10)
    })
    @AllowNull(true)
    lastName: string;

    @Column({
        type: DataType.TEXT
    })
    @AllowNull(true)
    address: string;

    @Column({
        type: DataType.DATEONLY
    })
    @AllowNull(true)
    birthday: string;

    @ForeignKey(() => Accounts)
    @Column
    accountId: string;

    @BelongsTo(() => Accounts)
    account: Accounts;
}
