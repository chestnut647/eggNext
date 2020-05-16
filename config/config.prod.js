/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {

  const config = {};
  config.next = {
    dev: false,
    dir: './ssr',
  };
  return {
    ...config,
  };
};
