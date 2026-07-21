const fs = require('fs');
const { globSync } = require('glob');
const strip = require('strip-comments');

const repoPath = '..';

const cLikeExtensions = ['**/*.cs', '**/*.java', '**/*.js', '**/*.ts', '**/*.jsx', '**/*.tsx'];
const htmlLikeExtensions = ['**/*.html', '**/*.xml'];

// Ignore directories
const ignore = ['**/node_modules/**', '**/scratch/**', '**/.git/**', '**/bin/**', '**/obj/**', '**/dist/**', '**/.angular/**'];

async function processFiles() {
    // C-like languages
    for (const pattern of cLikeExtensions) {
        const files = globSync(pattern, { cwd: repoPath, ignore: ignore, absolute: true });
        for (const file of files) {
            const content = fs.readFileSync(file, 'utf8');
            try {
                const stripped = strip(content);
                if (content !== stripped) {
                    fs.writeFileSync(file, stripped, 'utf8');
                    console.log(`Stripped C-like comments from: ${file}`);
                }
            } catch (e) {
                console.error(`Error processing ${file}: ${e.message}`);
            }
        }
    }

    // HTML/XML
    for (const pattern of htmlLikeExtensions) {
        const files = globSync(pattern, { cwd: repoPath, ignore: ignore, absolute: true });
        for (const file of files) {
            const content = fs.readFileSync(file, 'utf8');
            const stripped = content.replace(/<!--[\s\S]*?-->/g, '');
            if (content !== stripped) {
                fs.writeFileSync(file, stripped, 'utf8');
                console.log(`Stripped HTML/XML comments from: ${file}`);
            }
        }
    }
}

processFiles().then(() => console.log('Done.')).catch(console.error);
