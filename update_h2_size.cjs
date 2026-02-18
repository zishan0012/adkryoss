const fs = require('fs');
const path = require('path');

const targetDirs = [
    'src/pages/our-services/seo',
    'src/pages/our-services/content-marketing',
    'src/pages/our-services/martech'
];

const walk = (dir) => {
    let results = [];
    const list = fs.readdirSync(dir);
    list.forEach((file) => {
        file = path.join(dir, file);
        const stat = fs.statSync(file);
        if (stat && stat.isDirectory()) {
            results = results.concat(walk(file));
        } else if (file.endsWith('.jsx')) {
            results.push(file);
        }
    });
    return results;
};

const transformContent = (content) => {
    // Find the first </section> to skip the hero
    const heroEndIndex = content.indexOf('</section>');
    if (heroEndIndex === -1) return content;

    const heroPart = content.substring(0, heroEndIndex + 10);
    const restPart = content.substring(heroEndIndex + 10);

    // Replace h2 size in non-hero sections
    let newRestPart = restPart;

    // Rule: h2 to 36px
    newRestPart = newRestPart.replace(/<h2([^>]*?)className=(["'])(.*?)\2/g, (match, p1, p2, p3) => {
        let classes = p3;
        // This regex targets common Tailwind text size classes including arbitrary values in brackets
        // It matches the class if it's separated by spaces or at the start/end
        const sizes = ['sm', 'base', 'lg', 'xl', '2xl', '3xl', '4xl', '5xl', '6xl', '7xl', '8xl', '9xl'];

        let classList = classes.split(/\s+/);
        let updated = false;

        classList = classList.map(cls => {
            if (cls.startsWith('text-')) {
                const val = cls.substring(5);
                if (sizes.includes(val) || /^\[\d+(px|rem)\]$/.test(val)) {
                    updated = true;
                    return 'text-[36px]';
                }
            }
            return cls;
        });

        if (!updated) {
            classList.push('text-[36px]');
        }

        // De-duplicate classes
        classes = [...new Set(classList)].join(' ');

        return `<h2${p1}className=${p2}${classes}${p2}`;
    });

    return heroPart + newRestPart;
};

targetDirs.forEach((relativeDir) => {
    const dir = path.resolve(process.cwd(), relativeDir);
    if (!fs.existsSync(dir)) return;

    const files = walk(dir);
    files.forEach((file) => {
        if (file.endsWith('index.jsx')) return;

        const content = fs.readFileSync(file, 'utf8');
        const transformed = transformContent(content);

        if (content !== transformed) {
            fs.writeFileSync(file, transformed, 'utf8');
            console.log(`Updated H2 size: ${file}`);
        }
    });
});
