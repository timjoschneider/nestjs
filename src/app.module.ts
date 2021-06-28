import { Module } from '@nestjs/common';
import { TasksModule } from './tasks/tasks.module';
import { AuthModule } from './auth/auth.module';
import { AutoController } from './auto/auto.controller';

@Module({
  imports: [TasksModule, AuthModule],
  controllers: [AutoController],
})
export class AppModule {}

