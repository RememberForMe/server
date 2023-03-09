import { Module } from '@nestjs/common';
import { AccountHobbyService } from './account_hobby.service';
import { AccountHobbyController } from './account_hobby.controller';
import { AccountHobbyResolver } from './account_hobby.resolver';

@Module({
  controllers: [AccountHobbyController],
  providers: [AccountHobbyService, AccountHobbyResolver]
})
export class AccountHobbyModule {}
