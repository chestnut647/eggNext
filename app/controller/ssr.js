'use strict';

const Controller = require('egg').Controller;

class SSRController extends Controller {
  async index() {
    const { ctx, app } = this;
    // ctx.body = 'hi, egg';
    const { req, res } = ctx;
    await app.next.render(req, res, '/');
  }
}

module.exports = SSRController;
