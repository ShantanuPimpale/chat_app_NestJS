import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User, UserDocument } from './schemas/user.schema';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UserService {
  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}

  async findUserByUsername(username: string): Promise<User> {
    return this.userModel.findOne({ username }).exec();
  }

  async createUser(username: string, password: string, email: string): Promise<User> {
    try {
      const hashedPassword = await bcrypt.hash(password, 10);
      const user = new this.userModel({ username, password: hashedPassword, email });
      return user.save();
    } catch (error) {
      console.error('Error creating user:', error);
      throw error;
    }
  }
}
