import { Inject, Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './interfaces/user.interface';

@Injectable()
export class UserService {
	constructor(@Inject('USER_MODEL') private readonly userModel: Model<User>) { }

	async create(createUserDto: CreateUserDto): Promise<User> {
		const createdUser = new this.userModel(createUserDto);
		return await createdUser.save();
	}

	async findAll(): Promise<User[]> {
		return await this.userModel.find().exec();
	}
}
