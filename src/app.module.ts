import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import * as path from 'path';
import { UserModule } from './modules/user/user.module';
import { ConfigModule } from './config/config.module';

@Module({
	imports: [
		ConfigModule,
		UserModule,
	],
	controllers: [AppController],
	providers: [AppService],
})
export class AppModule { }
