'use strict';

/**
 * sweet service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::sweet.sweet');
