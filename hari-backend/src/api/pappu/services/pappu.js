'use strict';

/**
 * pappu service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::pappu.pappu');
