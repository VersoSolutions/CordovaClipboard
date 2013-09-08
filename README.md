CDVClipboard
============

Clipboard management plugin for Cordova/PhoneGap.

Notes:
- The only supported platform at the moment is iOS.
- The plugin can only be used with text content.

## Usage

Install the plugin using the CLI, for instance with PhoneGap:

	phonegap local plugin add https://github.com/VersoSolutions/CordovaClipboard

The plugin creates the object `window.plugins.clipboard` with the methods `copy(text)` and `paste(callback)`.

Example:

	var data = "Hello World!";

	window.plugins.copy(data);

	window.plugins.paste(function (data) { alert(data); });

## Acknowledgements

This plugin is based on [ClipboardManagerPlugin](https://github.com/jacob/ClipboardManagerPlugin) (Android) and [ClipboardPlugin](https://github.com/phonegap/phonegap-plugins/tree/master/iPhone/ClipboardPlugin) (iOS).

## License

The MIT License (MIT)

Copyright (c) 2013 Verso Solutions LLC

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
