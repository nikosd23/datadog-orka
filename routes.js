const { getLogger } = require('@workablehr/orka');

module.exports = {
  get: {
    '/test': async (ctx, next) => (ctx.body = 'ok'),
    '/testPolicy': async (ctx, next) => (ctx.body = 'ok'),
    '/log': async (ctx, next) => {
      getLogger('log').info('%s world', 'hello', { context: 'foo' });
      ctx.body = 'logged';
    },
    '/logError': async (ctx, next) => {
      getLogger('log').error(new Error('test'), 'this was a test error', { context: 'foo' });
      ctx.throw(new Error('test'), 505);
    },
    '/api/allowAll/accounts/:subdomain': async (ctx, next) => (ctx.body = 'ok')
  },
  post: {
    '/test': async (ctx, next) => (ctx.body = 'ok')
  }
};