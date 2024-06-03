import { Controller, Post, Body } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('register')
  async register(@Body() createUserDto: CreateUserDto) {
    try {
      console.log('Register request body:', createUserDto);
      const user = await this.userService.createUser(createUserDto.username, createUserDto.password, createUserDto.email);
      return user;
    } catch (error) {
      console.error('Error during registration:', error);
      throw error;
    }
  }
}
