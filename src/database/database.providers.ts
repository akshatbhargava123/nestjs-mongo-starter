import * as mongoose from 'mongoose';
import { ConfigService } from '../config/config.service';

export const databaseProviders = [
	{
		provide: 'DATABASE_CONNECTION',
		inject: [ConfigService],
		useFactory: async (config: ConfigService): Promise<typeof mongoose> => {
			return await mongoose.connect(config.get('DATABASE_URI'));
		},
	},
];
