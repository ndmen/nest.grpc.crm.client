import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersNestService } from './users.service';

@Module({
  imports: [],
  controllers: [UsersController],
  providers: [UsersNestService],
})
export class UsersModule {}
