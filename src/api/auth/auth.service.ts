import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { AccountsService } from '../accounts/accounts.service';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import Accounts from '../accounts/entities/account.entity';
import { AuthInput } from './dto/auth.input';
import { RolesService } from '../roles/roles.service';

@Injectable()
export class AuthService {
    constructor(
        private readonly accountsService: AccountsService,
        private readonly jwtService: JwtService,
        private readonly rolesService: RolesService
    ) {}

    async comparePassword(password: string, hash: string): Promise<boolean> {
        return await bcrypt.compare(password, hash)
    }

    async validateAccount(username: string, password: string): Promise<any> {
        const account = await this.accountsService.findOneByUsername(username)
        const isMatchPassword = await this.comparePassword(password, account.password)

        if (account && isMatchPassword) {
            const { password, ...result } = account
            return result
        }

        return null
    }

    async login(account: Accounts) {
        return {
            access_token: this.jwtService.sign({ username: account.username, sub: account.id }),
            account: account.dataValues
        } 
    }

    async register(input: AuthInput) {
        const account = await this.accountsService.findOneByUsername(input.username)

        if (account) {
            throw new HttpException('Account already exists', HttpStatus.FORBIDDEN)
        }

        const roleAdmin = await this.rolesService.findOneByName(input.role || 'user')

        return this.accountsService.createNewRecord({
            username: input.username,
            password: input.password,
            roleId: roleAdmin.id
        })
    }
}
