import {
    Table,
    Model,
    Column,
    ForeignKey
} from 'sequelize-typescript'
import { Accounts } from './account.model';
import { Hobbys } from './hobby.model';

@Table
export class AccountHobbys extends Model {
    @ForeignKey(() => Accounts)
    @Column
    accountId: string;

    @ForeignKey(() => Hobbys)
    @Column
    hobbyId: string;
}