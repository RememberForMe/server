import { ObjectType, Field, ID } from '@nestjs/graphql';
import { Table, Column, Unique, AllowNull, PrimaryKey, DataType, Model, HasMany } from 'sequelize-typescript';
import Profiles from 'src/api/profiles/entities/profile.entity';

@ObjectType()
@Table({ tableName: 'Genders', timestamps: false })
export default class Genders extends Model {
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

  @Field(() => Profiles)
  @HasMany(() => Profiles)
  profiles: Profiles[]
}
