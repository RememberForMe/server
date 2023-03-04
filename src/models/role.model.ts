import {
    Table,
    Model,
    Column,
    DataType,
    PrimaryKey,
    AllowNull,
    Unique,
    CreatedAt,
    UpdatedAt
} from 'sequelize-typescript'

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
}