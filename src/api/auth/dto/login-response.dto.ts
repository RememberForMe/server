import { Field, ObjectType } from '@nestjs/graphql';
import Accounts from 'src/api/accounts/entities/account.entity';

@ObjectType()
export class LoginResponseDTO {
    @Field()
    access_token: string;

    @Field(() => Accounts)
    account: Accounts
}