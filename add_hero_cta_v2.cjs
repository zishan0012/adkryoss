// add_hero_cta_v2.cjs
// Adds hero CTA buttons to all service pages - handles multiple hero patterns
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

const ALREADY_PATCHED = 'Speak to Our Expert';

// Various patterns used in hero sections across pages – all indicate "end of left content"
// We look for the img tag that is in the RIGHT side of the hero, then find
// the </div> that closes the LEFT content div just before it.
// Strategy: Find the hero section, then within it find the first <img or first
// {/* image begin. We walk backwards to find the </div>.

const SERVICE_DIRS = [
    'd:\\adkryoss\\src\\pages\\our-services\\seo',
    'd:\\adkryoss\\src\\pages\\our-services\\content-marketing',
    'd:\\adkryoss\\src\\pages\\our-services\\martech',
    'd:\\adkryoss\\src\\pages\\our-services\\digital-marketing',
    'd:\\adkryoss\\src\\pages\\our-services\\paid-marketing',
    'd:\\adkryoss\\src\\pages\\our-services\\app-marketing',
];

// Markers that indicate the start of the RIGHT column in the hero
// We will search for any of these in the hero section
const RIGHT_COLUMN_MARKERS = [
    '{/* RIGHT IMAGE */}',
    '/* RIGHT IMAGE */',
    'RIGHT IMAGE',
    'RIGHT EDGE',
    'justify-end',  // The flex justify-end on the right image div
];

function findInsertionPoint(content) {
    // Find the hero section boundaries
    // The hero section always starts within the first 30% of the file
    const heroSectionEnd = Math.floor(content.length * 0.35);
    const heroChunk = content.substring(0, heroSectionEnd);

    // Find the hero image/right column
    // Strategy: Find "justify-end" which is only on the RIGHT column div in the hero
    // We look for 'justify-end' or 'justify-center md:justify-end' which marks the right div
    const rightDivPattern = /justify-center md:justify-end|flex justify-center md:justify-end|flex justify-end lg:justify-end/;
    const rightDivMatch = rightDivPattern.exec(heroChunk);

    if (rightDivMatch) {
        const posBeforeRightDiv = rightDivMatch.index;
        const beforeRight = content.substring(0, posBeforeRightDiv);
        // Find the last </div> before the right div - that closes the left content
        const lastDivClose = beforeRight.lastIndexOf('</div>');
        if (lastDivClose !== -1) {
            return lastDivClose;
        }
    }

    // Fallback: look for RIGHT IMAGE comment
    const rightImageIdx = content.indexOf('{/* RIGHT IMAGE */}');
    if (rightImageIdx !== -1) {
        const beforeRight = content.substring(0, rightImageIdx);
        const lastDivClose = beforeRight.lastIndexOf('</div>');
        if (lastDivClose !== -1) {
            return lastDivClose;
        }
    }

    // Second fallback: look for "RIGHT" anywhere in a comment in the first 35% of file
    const rightCommentMatch = /\{\/\*.*?RIGHT.*?\*\/\}/.exec(heroChunk);
    if (rightCommentMatch) {
        const beforeRight = content.substring(0, rightCommentMatch.index);
        const lastDivClose = beforeRight.lastIndexOf('</div>');
        if (lastDivClose !== -1) {
            return lastDivClose;
        }
    }

    return -1;
}

let patchedCount = 0;
let skippedCount = 0;
let errorCount = 0;

for (const dir of SERVICE_DIRS) {
    const files = fs.readdirSync(dir).filter(f => f.endsWith('.jsx') && f !== 'index.jsx');
    for (const file of files) {
        const filePath = path.join(dir, file);
        let content = fs.readFileSync(filePath, 'utf8');

        if (content.includes(ALREADY_PATCHED)) {
            console.log(`[SKIP] ${file} (already patched)`);
            skippedCount++;
            continue;
        }

        const insertAt = findInsertionPoint(content);
        if (insertAt === -1) {
            console.log(`[FAIL] ${file} - Could not find insertion point`);
            errorCount++;
            continue;
        }

        const newContent = content.substring(0, insertAt) + CTA_BLOCK + '\n' + content.substring(insertAt);
        fs.writeFileSync(filePath, newContent, 'utf8');
        console.log(`[OK]   ${file}`);
        patchedCount++;
    }
}

console.log(`\nDone! Patched: ${patchedCount}, Skipped: ${skippedCount}, Errors: ${errorCount}`);
