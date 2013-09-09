using WPCordovaClassLib.Cordova;
using WPCordovaClassLib.Cordova.Commands;
using WPCordovaClassLib.Cordova.JSON;

namespace Cordova.Extension.Commands
{
    public class Clipboard : BaseCommand
    {
        public void copy(string options)
        {
            string text = "";

            try
            {
                text = JsonHelper.Deserialize<string[]>(options)[0];
            }
            catch { }

            if (!string.IsNullOrEmpty(text))
            {
                System.Windows.Deployment.Current.Dispatcher.BeginInvoke(() =>
                {
                    System.Windows.Clipboard.SetText(text);
                });
                DispatchCommandResult(new PluginResult(PluginResult.Status.OK, text));
            }
            else
            {
                DispatchCommandResult(new PluginResult(PluginResult.Status.JSON_EXCEPTION));
            }
        }

        public void paste(string options)
        {
            string text = "";

            try
            {
                text = System.Windows.Clipboard.GetText();
            }
            catch { }

            if (!string.IsNullOrEmpty(text))
            {
                DispatchCommandResult(new PluginResult(PluginResult.Status.OK, text));
            }
            else
            {
                DispatchCommandResult(new PluginResult(PluginResult.Status.ERROR));
            }
        }
    }
}