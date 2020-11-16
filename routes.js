
const logger = require('@workablehr/orka').getLogger('[Routes]');

module.exports = {
  post: {
    '/test': async (ctx, next) => {
        logger.info(`We received a special request with ${ctx.request.body.bodyAttributeA}, ${ctx.request.body.bodyAttributeB}}`);
        return ctx.body = 'ok';
  }
}
};