'use strict';
const fs=require('fs');
const mock = {};

fs.readdirSync(require('path').join(__dirname + '/mock'))
  .forEach(function (file) {
    Object.assign(mock, require('./mock/' + file));
  });

module.exports = mock;
