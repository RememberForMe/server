import { ObjectType, Field, ID } from '@nestjs/graphql';
import { Table, Column, Unique, AllowNull, PrimaryKey, DataType } from 'sequelize-typescript';

@ObjectType()
@Table({ tableName: 'Genders', timestamps: false })
export default class Gender {
  @Field(() => ID)
  @PrimaryKey
  @Column({
    type: DataType.UUID,
    defaultValue: DataType.UUIDV4
  })
  id: string;

  @Field()
  @Unique
  @AllowNull(false)
  @Column({
    type: DataType.STRING(10)
  })
  name: string;
}
