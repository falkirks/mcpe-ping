'use strict';
var assert = require('assert');
var mcpeping = require('../');

describe('mcpe-ping node module', function () {
  it('must be able to ping sg.lbsg.net', function () {
    mcpeping('play.inpvp.net', 19132, function(err) {
      assert(null, err);
    }, 5000);
  });
  it('must be able to ping a.a', function () {
    mcpeping('a.a', 19132, function(err) {
      assert(err, {error: true, description: "Error sending ping."});
    }, 5000);
  });
});
