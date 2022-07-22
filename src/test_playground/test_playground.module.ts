import { Module } from '@nestjs/common';
import { TestPlaygroundController } from './test_playground.controller';
import { TestPlaygroundService } from './test_playground.service';

@Module({
  controllers: [TestPlaygroundController],
  providers: [TestPlaygroundService]
})
export class TestPlaygroundModule {}
