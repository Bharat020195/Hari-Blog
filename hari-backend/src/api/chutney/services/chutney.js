'use strict';

/**
 * chutney service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::chutney.chutney');
