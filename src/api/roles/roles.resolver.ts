import { Resolver } from '@nestjs/graphql';
import { Roles } from './entities/role.entity';

@Resolver(() => Roles)
export class RolesResolver {}
