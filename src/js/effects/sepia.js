'use strict';

/**
 * Namespace for the Camera app.
 */
var camera = camera || {};

/**
 * Namespace for effects.
 */
camera.effects = camera.effects || {};

/**
 * @param {camera.Tracker} tracker Head tracker object.
 * @constructor
 * @extends {camera.Effect}
 */
camera.effects.Sepia = function(tracker) {
  camera.Effect.call(this, tracker);
  Object.freeze(this);
};

camera.effects.Sepia.prototype = {
  __proto__: camera.Effect.prototype
};

/**
 * @override
 */
camera.effects.Sepia.prototype.filterFrame = function(canvas) {
  canvas.sepia(0.5);
};

/**
 * @override
 */
camera.effects.Sepia.prototype.getTitle = function() {
  return chrome.i18n.getMessage('sepiaEffect');
};

