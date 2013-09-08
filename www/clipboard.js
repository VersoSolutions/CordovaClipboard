var cordova = require('cordova');

/**
 * Clipboard plugin for Cordova
 * 
 * @constructor
 */
function Clipboard () {}

/**
 * Sets the clipboard content
 *
 * @param {String} text The content to copy to the clipboard
 */
Clipboard.prototype.copy = function (text) {
	cordova.exec(null, null, "Clipboard", "copy", [text]);
}

/**
 * Gets the clipboard content
 *
 * @param {Function} callback The function to call with the result
 */
Clipboard.prototype.paste = function (callback) {
	cordova.exec(callback, null, "Clipboard", "paste", []);
}

// Register the plugin
var clipboard = new Clipboard();
module.exports = clipboard;