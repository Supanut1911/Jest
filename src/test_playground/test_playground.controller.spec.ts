import { Test, TestingModule } from '@nestjs/testing';
import { TestPlaygroundController } from './test_playground.controller';

describe('TestPlaygroundController', () => {
  let controller: TestPlaygroundController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TestPlaygroundController],
    }).compile();

    controller = module.get<TestPlaygroundController>(TestPlaygroundController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
