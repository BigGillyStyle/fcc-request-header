import { Test, TestingModule } from '@nestjs/testing';
import { WhoamiController } from './whoami.controller';

describe('Whoami Controller', () => {
  let module: TestingModule;
  beforeAll(async () => {
    module = await Test.createTestingModule({
      controllers: [WhoamiController],
    }).compile();
  });
  it('should be defined', () => {
    const controller: WhoamiController = module.get<WhoamiController>(WhoamiController);
    expect(controller).toBeDefined();
  });
});
