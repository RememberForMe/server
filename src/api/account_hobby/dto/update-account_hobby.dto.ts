import { PartialType } from '@nestjs/mapped-types';
import { CreateAccountHobbyDto } from './create-account_hobby.dto';

export class UpdateAccountHobbyDto extends PartialType(CreateAccountHobbyDto) {}
