import { Test, TestingModule } from '@nestjs/testing';
import { StatusController } from './status.controller';
import { StatusService } from './status.service';

describe('StatusController', () => {
  let statusController: StatusController;
  let statusService: StatusService;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [StatusController],
      providers: [StatusService],
    }).compile();

    statusService = new StatusService();
    statusController = app.get<StatusController>(StatusController);
  });

  describe('status test', () => {
    it('모니터링 상태 체크는 200을 반환해야 한다.', async () => {
      const result = Object.assign({ statusCode: 200 });

      jest
        .spyOn(statusService, 'getMonitorStatus')
        .mockImplementation(() => result);

      expect(await statusController.getMonitorStatus()).toStrictEqual(result);
    });

    it('서비스 상태 체크에 성공하면 200을 반환해야 한다.', async () => {
      const result = Object.assign({ statusCode: 200 });
      const input = 'thumbnail_generator';

      jest
        .spyOn(statusService, 'getServiceStatus')
        .mockImplementation(() => result);

      expect(await statusController.getServiceStatus(input)).toStrictEqual(
        result,
      );
    });

    it('서비스 상태 체크에 실패하면 -1을 반환해야 한다.', async () => {
      const result = Object.assign({ statusCode: -1 });
      const input = 'invalid_ID';

      jest
        .spyOn(statusService, 'getServiceStatus')
        .mockImplementation(() => result);

      expect(await statusController.getServiceStatus(input)).toStrictEqual(
        result,
      );
    });

    it('전체 서비스 상태 체크에 성공하면 200을 반환해야 한다.', async () => {
      const result = Object.assign({
        services: [
          {
            name: 'blog_vercel',
            statusCode: 200,
          },
          {
            name: 'blog_tistory',
            statusCode: 200,
          },
          {
            name: 'thumbnail_generator',
            statusCode: 200,
          },
          {
            name: 'cors_proxy_server',
            statusCode: 200,
          },
        ],
      });

      jest
        .spyOn(statusService, 'getServiceStatusAll')
        .mockImplementation(() => result);

      expect(await statusController.getServiceStatusAll()).toStrictEqual(
        result,
      );
    });
  });
});
