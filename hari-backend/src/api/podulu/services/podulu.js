'use strict';

/**
 * podulu service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::podulu.podulu');
