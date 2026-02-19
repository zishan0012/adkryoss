// check_missing.cjs - check which files are missing and what patterns they use
const fs = require('fs');
const path = require('path');

const SERVICE_DIRS = [
    'd:\\adkryoss\\src\\pages\\our-services\\seo',
    'd:\\adkryoss\\src\\pages\\our-services\\content-marketing',
    'd:\\adkryoss\\src\\pages\\our-services\\martech',
    'd:\\adkryoss\\src\\pages\\our-services\\digital-marketing',
    'd:\\adkryoss\\src\\pages\\our-services\\paid-marketing',
    'd:\\adkryoss\\src\\pages\\our-services\\app-marketing',
];

const RIGHT_IMAGE_COMMENT = '{/* RIGHT IMAGE */}';
const ALREADY_PATCHED = 'Speak to Our Expert';

for (const dir of SERVICE_DIRS) {
    const files = fs.readdirSync(dir).filter(f => f.endsWith('.jsx') && f !== 'index.jsx');
    for (const file of files) {
        const filePath = path.join(dir, file);
        const content = fs.readFileSync(filePath, 'utf8');
        if (content.includes(ALREADY_PATCHED)) continue;
        if (!content.includes(RIGHT_IMAGE_COMMENT)) {
            // Find what comment/text is near the right image section
            const lines = content.split('\n');
            // Find lines with "right" or "image" case-insensitive
            for (let i = 0; i < lines.length; i++) {
                if (/right|image/i.test(lines[i]) && lines[i].includes('{/*')) {
                    console.log(`${file}:${i + 1}: ${lines[i].trim()}`);
                }
            }
            if (!lines.some((l, i) => /right|image/i.test(l) && l.includes('{/*'))) {
                console.log(`${file}: NO matching comment found at all`);
            }
        }
    }
}
