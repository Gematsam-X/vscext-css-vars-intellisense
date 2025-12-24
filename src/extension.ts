import * as vscode from 'vscode';
import { getAngularStyles, extractCssVariables } from './cssParser';
import { startWatcher, stopWatcher } from './watcher';

let currentVariables: string[] = [];

export function activate(context: vscode.ExtensionContext) {
  const root = vscode.workspace.rootPath || '';
  const styles = getAngularStyles(root);
  currentVariables = extractCssVariables(styles);

  // Start file watcher
  startWatcher((vars) => {
    currentVariables = vars;
  });

  const provider = vscode.languages.registerCompletionItemProvider(
    ['css', 'scss'],
    {
      provideCompletionItems(document: vscode.TextDocument, position: vscode.Position) {
        return currentVariables.map(v => new vscode.CompletionItem(v, vscode.CompletionItemKind.Variable));
      }
    },
    '-' // trigger dopo var(--
  );

  context.subscriptions.push(provider);
  context.subscriptions.push({ dispose: stopWatcher });
}

export function deactivate() {
  stopWatcher();
}
