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
Clipboard.prototype.copy = function (text, onSuccess, onFail) {
	cordova.exec(onSuccess, onFail, "Clipboard", "copy", [text]);
}

/**
 * Gets the clipboard content
 *
 * @param {Function} callback The function to call with the result
 */
Clipboard.prototype.paste = function (onSuccess, onFail) {
	cordova.exec(onSuccess, onFail, "Clipboard", "paste", []);
}

// Register the plugin
var clipboard = new Clipboard();
module.exports = clipboard;