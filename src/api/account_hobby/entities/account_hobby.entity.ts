import {
    Table,
    Model,
    Column,
    ForeignKey
} from 'sequelize-typescript'
import { Accounts } from 'src/api/accounts/entities/account.entity';
import { Hobbys } from 'src/api/hobbys/entities/hobby.entity';

@Table
export class AccountHobby extends Model {
    @ForeignKey(() => Accounts)
    @Column
    accountId: string;

    @ForeignKey(() => Hobbys)
    @Column
    hobbyId: string;
}
