import { EntityModel } from '@midwayjs/orm';
import { BaseEntity } from '@cool-midway/core';
import { Column } from 'typeorm';

export enum TYPES {
  STRING = 'String',
  NUMBER = 'Number',
  BOOLEAN = 'Boolean',
  OBJECT = 'Object',
  ARRAY = 'Array',
  FUNCTION = 'Function',
  REGEXP = 'RegExp',
  Null = 'Null',
}

/**
 * 参数类型
 */
export enum POS_TYPE {
  QUERY = 2,
  HEADER = 1,
  BODY = 3,
  PRE_REQUEST_SCRIPT = 4,
  TEST = 5,
}
/**
 * 菜单
 */
@EntityModel('api_center_property')
export class ApiCenterPropertyEntity extends BaseEntity {
  @Column({
    comment: 'property type',
  })
  type: string;

  @Column({ default: 2, comment: '属性位置' }) // for better extension
  /** request params type (position) */
  pos: POS_TYPE;

  @Column({ length: 256, nullable: false, comment: '属性名称' })
  name: string;

  @Column({ length: 128, comment: '值域规则' })
  rule: string;

  @Column({ type: 'text', comment: '字段值' })
  value: string;

  @Column({ type: 'text', comment: '属性描述' })
  description: string;

  @Column({ default: -1, nullable: false, comment: 'parent property ID' })
  parentId: number;

  @Column({ default: 0, comment: '接口id' })
  interfaceId: number;

  @Column({ default: 0, comment: '模块id' })
  moduleId: number;

  @Column({ default: 0, comment: '仓库id' })
  repositoryId: number;

  @Column({ default: 0, comment: '是否是必须的' })
  /** 是否为必填选项 */
  required: boolean;
}
