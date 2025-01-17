'use strict';

/* global require, exports */

const utils = require('./utils');

function execute(options) {
  var webapp = options.webapp;
  if (utils.isExternalApp(webapp)) {
    return;
  }
  var buildManifestFile = utils.getFile(webapp.buildManifestFilePath);
  var manifest = utils.getJSON(buildManifestFile);

  // Forces the presence of `origin` field in order to help WebIDE overriding
  // the app, with the same origin.
  manifest.origin = webapp.url;

  utils.writeContent(buildManifestFile, JSON.stringify(manifest));
}
exports.execute = execute;
