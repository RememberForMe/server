import { Resolver } from '@nestjs/graphql';
import { AccountHobby } from './entities/account_hobby.entity';

@Resolver(() => AccountHobby)
export class AccountHobbyResolver {}
