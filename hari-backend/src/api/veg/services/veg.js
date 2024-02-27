'use strict';

/**
 * veg service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::veg.veg');
