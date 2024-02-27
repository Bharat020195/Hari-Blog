'use strict';

/**
 * egg-item service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::egg-item.egg-item');
