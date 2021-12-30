import { EntityModel } from '@midwayjs/orm';
import { BaseEntity } from '@cool-midway/core';
import { Column } from 'typeorm';

/**
 * 描述
 */
@EntityModel('api_center_module')
export class ApiCenterModuleEntity extends BaseEntity {
  @Column({ comment: '模块名字' })
  name: string;

  @Column({ comment: '模块描述' })
  description: string;

  @Column({ comment: '仓库id' })
  respositoryId: number;
}
