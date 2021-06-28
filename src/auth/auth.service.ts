import { Injectable } from '@nestjs/common';
import { UsersRepository } from './users.repository';
import { InjectRepository} from '@nestjs/common';

@Injectable()
export class AuthService {
    constructor (
        @InjectRepository(UsersRepository)
        private usersRepository: UsersRepository,
        ){}
}
