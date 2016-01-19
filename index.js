/* jshint node: true */
'use strict';

module.exports = {
  name: 'my-addon',
  included: function(app) {
    this._super.included(app);
  }
};
