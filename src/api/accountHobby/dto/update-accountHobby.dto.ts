import { PartialType } from '@nestjs/mapped-types';
import { CreateAccountHobbyDto } from './create-accountHobby.dto';

export class UpdateAccountHobbyDto extends PartialType(CreateAccountHobbyDto) {}
