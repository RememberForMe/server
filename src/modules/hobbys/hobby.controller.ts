import { Controller } from '@nestjs/common';
import { HobbysService } from './hobby.service';

@Controller('hobbys')
export class HobbysController {
    constructor(private hobbysService: HobbysService) {}
}