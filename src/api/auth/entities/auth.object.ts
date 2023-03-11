import { ObjectType, Field } from '@nestjs/graphql';

@ObjectType()
export default class Auth {
    @Field()
    token: string;
}
