import * as vscode from 'vscode';
import * as chokidar from 'chokidar';
import { getAngularStyles, extractCssVariables } from './cssParser';

let watcher: chokidar.FSWatcher;

export function startWatcher(onChange: (variables: string[]) => void) {
  const root = vscode.workspace.rootPath;
  if (!root) return;

  const files = getAngularStyles(root);

  watcher = chokidar.watch(files, { ignoreInitial: true });
  watcher.on('change', () => {
    const vars = extractCssVariables(files);
    onChange(vars);
  });
}

export function stopWatcher() {
  if (watcher) watcher.close();
}
