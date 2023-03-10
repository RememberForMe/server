import { ObjectType, Field } from '@nestjs/graphql';

@ObjectType()
export default class Auth {
    @Field()
    username: string;

    @Field({ nullable: true })
    token?: string;
}
