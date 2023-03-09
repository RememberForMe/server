import { Module } from '@nestjs/common';
import { AccountHobbyService } from './accountHobby.service';
import { AccountHobbyController } from './accountHobby.controller';
import { AccountHobbyResolver } from './accountHobby.resolver';

@Module({
  controllers: [AccountHobbyController],
  providers: [AccountHobbyService, AccountHobbyResolver]
})
export class AccountHobbyModule {}
