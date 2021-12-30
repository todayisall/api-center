import { EntityModel } from '@midwayjs/orm';
import { BaseEntity } from '@cool-midway/core';
import { Column } from 'typeorm';

/**
 * 描述
 */
@EntityModel('api_center_interface')
export class ApiCenterInterfaceEntity extends BaseEntity {
  @Column({ length: 256, comment: '接口名称', nullable: false })
  name: string;

  @Column({ length: 256, comment: '接口路径', nullable: false })
  url: string;

  @Column({ length: 256, comment: 'API method', nullable: false })
  method: string;

  @Column({ length: 256, comment: '请求题类型' })
  bodyOption: string;

  @Column({ length: 256, comment: '接口描述' })
  description: string;

  @Column({ comment: '模块id' })
  moduleId: number;

  @Column({ comment: '仓库id' })
  respositoryId: number;
}
