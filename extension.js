const vscode = require("vscode");

/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {
  const disposable = vscode.commands.registerCommand(
    "malas-ngoding.scrollFacebook",
    function () {
      vscode.env.openExternal(vscode.Uri.parse("https://facebook.com"));
    }
  );

  context.subscriptions.push(disposable);
}

function deactivate() {}

module.exports = {
  activate,
  deactivate,
};
