import * as fs from 'fs';
import * as path from 'path';

export function getAngularStyles(rootPath: string): string[] {
  const angularJsonPath = path.join(rootPath, 'angular.json');
  if (!fs.existsSync(angularJsonPath)) return [];

  const angularConfig = JSON.parse(fs.readFileSync(angularJsonPath, 'utf-8'));
  const projects = angularConfig.projects || {};
  const styles: string[] = [];

  Object.values(projects).forEach((proj: any) => {
    const build = proj.architect?.build?.options;
    if (build?.styles) {
      build.styles.forEach((stylePath: string) => {
        const fullPath = path.join(rootPath, stylePath);
        if (fs.existsSync(fullPath)) styles.push(fullPath);
      });
    }
  });

  return styles;
}

export function extractCssVariables(files: string[]): string[] {
  const vars: string[] = [];
  files.forEach(file => {
    const content = fs.readFileSync(file, 'utf-8');
    const matches = content.match(/--[a-zA-Z0-9-_]+/g);
    if (matches) vars.push(...matches);
  });
  return Array.from(new Set(vars));
}
