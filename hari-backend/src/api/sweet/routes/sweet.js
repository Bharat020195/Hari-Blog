'use strict';

/**
 * sweet router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::sweet.sweet');
