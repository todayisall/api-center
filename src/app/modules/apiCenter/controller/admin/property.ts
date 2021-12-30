import { Provide } from '@midwayjs/decorator';
import { CoolController, BaseController } from '@cool-midway/core';
import { ApiCenterPropertyEntity } from '../../entity/property';

/**
 * 描述
 */
@Provide()
@CoolController({
  api: ['add', 'delete', 'update', 'info', 'list', 'page'],
  entity: ApiCenterPropertyEntity,
})
export class XxxController extends BaseController {}
