import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AppService } from './app.service';

describe('AppController', () => {
  let appController: AppController;
  let appService: AppService;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService],
    }).compile();

    appService = new AppService();
    appController = app.get<AppController>(AppController);
  });

  describe('root', () => {
    it('모니터링 상태 체크는 200을 반환해야 한다.', async () => {
      const result = JSON.stringify({ statusCode: 200 });
      jest
        .spyOn(appService, 'getMonitorStatus')
        .mockImplementation(() => result);

      expect(await appController.getMonitorStatus()).toBe(result);
    });
  });
});
