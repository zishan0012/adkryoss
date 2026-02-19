// add_hero_cta.cjs
// Adds hero CTA buttons to all service pages
const fs = require('fs');
const path = require('path');

const CTA_BLOCK = `
                        <div className="flex flex-col sm:flex-row gap-4 mt-2">
                            <a
                                href="/contact"
                                className="bg-white text-black font-semibold px-8 py-4 rounded-full transition-all duration-300 hover:-translate-y-1 hover:shadow-xl text-center"
                            >
                                Speak to Our Expert →
                            </a>
                            <a
                                href="#services"
                                className="border-2 border-blue-500 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:text-black hover:-translate-y-1 hover:shadow-xl text-center"
                            >
                                Our Services →
                            </a>
                        </div>`;

// Marker we'll look for just BEFORE the closing </div> of the left content block
// The left content block always ends right before the RIGHT IMAGE comment
const RIGHT_IMAGE_COMMENT = '{/* RIGHT IMAGE */}';
// Already patched marker
const ALREADY_PATCHED = 'Speak to Our Expert';

const SERVICE_DIRS = [
    'd:\\adkryoss\\src\\pages\\our-services\\seo',
    'd:\\adkryoss\\src\\pages\\our-services\\content-marketing',
    'd:\\adkryoss\\src\\pages\\our-services\\martech',
    'd:\\adkryoss\\src\\pages\\our-services\\digital-marketing',
    'd:\\adkryoss\\src\\pages\\our-services\\paid-marketing',
    'd:\\adkryoss\\src\\pages\\our-services\\app-marketing',
];

let patchedCount = 0;
let skippedCount = 0;
let errorCount = 0;

for (const dir of SERVICE_DIRS) {
    const files = fs.readdirSync(dir).filter(f => f.endsWith('.jsx') && f !== 'index.jsx');
    for (const file of files) {
        const filePath = path.join(dir, file);
        let content = fs.readFileSync(filePath, 'utf8');

        // Skip if already has CTA buttons
        if (content.includes(ALREADY_PATCHED)) {
            console.log(`[SKIP] ${file} (already has CTA)`);
            skippedCount++;
            continue;
        }

        // Find the RIGHT IMAGE comment
        const rightImageIdx = content.indexOf(RIGHT_IMAGE_COMMENT);
        if (rightImageIdx === -1) {
            console.log(`[WARN] ${file} - RIGHT IMAGE comment not found, skipping`);
            errorCount++;
            continue;
        }

        // Walk backwards from RIGHT_IMAGE_COMMENT to find the closing </div> of the LEFT CONTENT block
        const beforeRightImage = content.substring(0, rightImageIdx);
        // Find the last </div> before the RIGHT IMAGE comment
        const lastDivIdx = beforeRightImage.lastIndexOf('</div>');
        if (lastDivIdx === -1) {
            console.log(`[WARN] ${file} - Could not find closing </div> before RIGHT IMAGE, skipping`);
            errorCount++;
            continue;
        }

        // Insert the CTA block just before the last </div>
        const newContent = content.substring(0, lastDivIdx) + CTA_BLOCK + '\n' + content.substring(lastDivIdx);
        fs.writeFileSync(filePath, newContent, 'utf8');
        console.log(`[OK]   ${file}`);
        patchedCount++;
    }
}

console.log(`\nDone! Patched: ${patchedCount}, Skipped: ${skippedCount}, Errors: ${errorCount}`);
