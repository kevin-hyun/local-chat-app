import { UsersService } from './users.service';
import { Body, Controller, Post, ValidationPipe } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';

@Controller('users')
export class UsersController {
  constructor(private userService: UsersService) {}

  @Post('/signUp')
  signup(@Body(ValidationPipe) createUserDto: CreateUserDto): Promise<void> {
    return this.userService.signUp(createUserDto);
  }
}
