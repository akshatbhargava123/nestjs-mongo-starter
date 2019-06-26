import * as dotenv from 'dotenv';
import * as fs from 'fs';
import * as path from 'path';
import { Injectable } from '@nestjs/common';

@Injectable()
export class ConfigService {
	private readonly envConfig: { [key: string]: string };

	constructor(filePath: string = path.resolve('.env')) {
		this.envConfig = dotenv.parse(fs.readFileSync(filePath));
	}

	get(key: string): string {
		return this.envConfig[key];
	}
}
