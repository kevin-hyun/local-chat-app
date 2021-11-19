import { Test, TestingModule } from '@nestjs/testing';
import { UsersController } from './users.controller';

describe('UsersController', () => {
  let controller: UsersController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UsersController],
    }).compile();

    controller = module.get<UsersController>(UsersController);
  });

  it(`POST '/' user Signup`, () => {
    const data = {
      email: 'test123@naver.com',
      password: 'password123!',
      address: '',
      nickName: '방랑자',
    };
  });
});
