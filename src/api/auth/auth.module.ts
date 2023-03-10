import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthResolver } from './auth.resolver';
import { AccountsModule } from '../accounts/accounts.module';
import { RolesModule } from '../roles/roles.module';

@Module({
    imports: [
        AccountsModule,
        RolesModule
    ],
    providers: [AuthResolver, AuthService]
})
export class AuthModule { }
