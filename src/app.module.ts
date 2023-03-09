import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { SequelizeConfig } from './config/sequelize.config';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { RolesModule } from './api/roles/roles.module';
import { AccountsModule } from './api/accounts/accounts.module';
import { ProfilesModule } from './api/profiles/profiles.module';
import { HobbysModule } from './api/hobbys/hobbys.module';
import { AccountHobbyModule } from './api/accountHobby/accountHobby.module';

@Module({
    imports: [
        SequelizeModule.forRoot(SequelizeConfig),
        GraphQLModule.forRoot<ApolloDriverConfig>({
            driver: ApolloDriver,
            autoSchemaFile: 'schema.gql'
        }),
        RolesModule,
        AccountsModule,
        ProfilesModule,
        HobbysModule,
        AccountHobbyModule,
    ],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule { }
