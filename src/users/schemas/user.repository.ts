import { Injectable, Logger, UnauthorizedException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateUserDto } from '../dto/create-user.dto';
import { User } from './user.schema';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UserRepository {
  constructor(@InjectModel(User.name) private userModel: Model<User>) {}
  private logger = new Logger('user');

  //* signUp User
  async createUser(createUserDto: CreateUserDto): Promise<void> {
    const { email, password, address, nickName } = createUserDto;

    const isUserExist = await this.userModel.exists({ email });

    if (isUserExist) {
      throw new UnauthorizedException('duplicated user');
    }
    const salt = await bcrypt.genSalt();
    const hashedPassword = await bcrypt.hash(password, salt);

    try {
      this.userModel.create({
        email,
        password: hashedPassword,
        address,
        nickName,
      });
    } catch (error) {
      if (error) {
        this.logger.log(`${error} occured`);
      }
    }
  }

  //*singIn User
}
