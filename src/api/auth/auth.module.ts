import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthResolver } from './auth.resolver';
import { AccountsModule } from '../accounts/accounts.module';
import { RolesModule } from '../roles/roles.module';
import { JwtModule } from '@nestjs/jwt';
import { jwtConfigs } from 'src/config/jwt.config';
import { PassportModule } from '@nestjs/passport';
import { LocalStrategy } from 'src/strategys/local.strategy';
import { JwtStrategy } from 'src/strategys/jwt.strategy';

@Module({
    imports: [
        AccountsModule,
        RolesModule,
        PassportModule,
        JwtModule.register({
            secret: jwtConfigs.secret,
            signOptions: { expiresIn: jwtConfigs.expireTime } 
        })
    ],
    providers: [
        AuthResolver, 
        AuthService,
        LocalStrategy,
        JwtStrategy
    ]
})
export class AuthModule { }
