import { Module } from '@nestjs/common';
import { AccountHobbyService } from './account_hobby.service';
import { AccountHobbyController } from './account_hobby.controller';

@Module({
  controllers: [AccountHobbyController],
  providers: [AccountHobbyService]
})
export class AccountHobbyModule {}
