'use strict';

/**
 * non-veg service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::non-veg.non-veg');
