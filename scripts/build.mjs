// Kopieert alleen wat online moet naar dist/ (nooit de brochure-pdf of broncode).
import { rmSync, mkdirSync, cpSync } from 'node:fs';

rmSync('dist', { recursive: true, force: true });
mkdirSync('dist/assets/css', { recursive: true });
cpSync('index.html', 'dist/index.html');
cpSync('assets/img', 'dist/assets/img', { recursive: true });
cpSync('assets/js', 'dist/assets/js', { recursive: true });
cpSync('assets/css/site.css', 'dist/assets/css/site.css');
console.log('dist/ klaar');
