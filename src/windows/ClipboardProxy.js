var cordova = require('cordova');

module.exports = {

  copy: function(successCallback, errorCallback, args) {
    var text = "";
    try {
      text = args[0];
    } catch (e) {
      errorCallback(e);
      return;
    }

    try {
      var dataPackage = new Windows.ApplicationModel.DataTransfer.DataPackage();
      dataPackage.setText(text);
      Windows.ApplicationModel.DataTransfer.Clipboard.setContent(dataPackage);
      successCallback(text);
    } catch (e) {
      errorCallback(e);;
    }
  },
  paste: function(successCallback, errorCallback, args) {
    var text = "";

    try {
      var dataPackageView = Windows.ApplicationModel.DataTransfer.Clipboard.getContent();
      if (dataPackageView.contains(Windows.ApplicationModel.DataTransfer.StandardDataFormats.text)) {
        dataPackageView.getTextAsync().then(function(value) {
          text = value;
          successCallback(text);
        });
      }
    } catch (e) {
      errorCallback(e);;
    }
  }
}; // exports

require("cordova/exec/proxy").add("Clipboard", module.exports);
