import { UserRepository } from './schemas/user.repository';
import { CreateUserDto } from './dto/create-user.dto';
import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
  constructor(private userRepository: UserRepository) {}

  async signUp(createUserDto: CreateUserDto): Promise<void> {
    return this.userRepository.createUser(createUserDto);
  }
}
