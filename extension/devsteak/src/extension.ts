import * as vscode from "vscode";

export function activate(context: vscode.ExtensionContext) {
  const connectAccount = vscode.commands.registerCommand(
    "devsteak.configureAccount",
    async () => {
      const token = await vscode.window.showInputBox({
        placeHolder: "Paste your API token ",
        password: true,
      });

      if (!token) {
        vscode.window.showErrorMessage("API token is required.");
        return;
      }

      try {
      } catch (error: any) {
        vscode.window.showErrorMessage(
          "Failed to connect to DevSteak: " + error.message,
        );
      }

      vscode.window.showInformationMessage("Hello World from DevSteak!");
    },
  );

  context.subscriptions.push(connectAccount);
}

export function deactivate() {}
