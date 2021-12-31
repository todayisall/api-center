import { Provide } from '@midwayjs/decorator';
import { CoolController, BaseController } from '@cool-midway/core';
import { ApiCenterRepositoryEntity } from '../../entity/repository';

/**
 * 描述
 */
@Provide()
@CoolController({
  api: ['add', 'delete', 'update', 'info', 'list', 'page'],
  entity: ApiCenterRepositoryEntity,
})
export class ApiCenterRepositoryController extends BaseController {}
