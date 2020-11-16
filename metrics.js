const logger = require('@workablehr/orka').getLogger('[Metrics]');

const Metrics = {
  ddTag(parameter, value, span = global.tracer.scope().active()) {
    if (parameter && value) {
      logger.debug(`[adding dd tag ${parameter}]: ${value}`);
      span.setTag(parameter, value);
    }
  }
};

module.exports = Metrics;
