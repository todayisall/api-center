import { Application } from 'egg';
import { ModuleConfig } from '@cool-midway/core';

/**
 * 模块的配置
 */
export default (app: Application) => {
  return {
    // 模块名称
    name: 'api-center',
    // 模块描述
    description: 'api 接口的管理',
    // 中间件
    globalMiddlewares: ['baseAuthorityMiddleware', 'baseLogMiddleware'],
    // jwt 生成解密token的
    jwt: {
      // 注意： 最好重新修改，防止破解
      secret: 'FOAPOFALOEQIPNNLQ',
      // token
      token: {
        // 2小时过期，需要用刷新token
        expire: 2 * 3600,
        // 15天内，如果没操作过就需要重新登录
        refreshExpire: 24 * 3600 * 15,
      },
    },
  } as ModuleConfig;
};
