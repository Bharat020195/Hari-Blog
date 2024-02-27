'use strict';

/**
 * snack service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::snack.snack');
