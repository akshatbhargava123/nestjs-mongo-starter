import { Controller, Get, Post, Body } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UserService } from './user.service';
import { User } from './interfaces/user.interface';

@Controller('user')
export class UserController {
	constructor(private readonly userService: UserService) { }

	@Post()
	async create(@Body() createCatDto: CreateUserDto) {
		this.userService.create(createCatDto);
	}

	@Get()
	async findAll(): Promise<User[]> {
		return this.userService.findAll();
	}
}
