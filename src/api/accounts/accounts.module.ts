import { Module } from '@nestjs/common';
import { AccountsService } from './accounts.service';
import { AccountsController } from './accounts.controller';
import { AccountsResolver } from './accounts.resolver';

@Module({
  controllers: [AccountsController],
  providers: [AccountsService, AccountsResolver]
})
export class AccountsModule {}
