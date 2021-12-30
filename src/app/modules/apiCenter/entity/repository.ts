import { EntityModel } from '@midwayjs/orm';
import { BaseEntity } from '@cool-midway/core';
import { Column } from 'typeorm';

/**
 * 描述
 */
@EntityModel('api_center_repository')
export class ApiCenterRepositoryEntity extends BaseEntity {
  @Column({ comment: '仓库名称' })
  name: string;

  @Column({ comment: '仓库描述' })
  description: string;

  @Column({ comment: 'logo' })
  logo: string;
}
