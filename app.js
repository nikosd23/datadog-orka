const { orka } = require('@workablehr/orka');
const Metrics = require('./metrics');
const Helpers = require('./helpers');

const w = orka({
    diamorphosis: { configFolder: './' },
    routesPath: './routes.js',
    beforeStart: () => {
        const tracer = require('dd-trace').init();
        tracer.use('koa', {
            blacklist: ['/health'],
            hooks: {
                request: (span, req, res) => {
                    // if (Helpers.isSpecificRequest(ctx)) {
                    //   Send info as ddTag from ctx.request.body
                    // }
                    Metrics.ddTag('user_id', Helpers.getUserId(req), span);
                    Metrics.ddTag('account_id', Helpers.getAccountId(req), span);
                }
            }
        });
        global.tracer = tracer;
    }
});

if (!module.parent) {
    w.start();
}

module.exports = w;