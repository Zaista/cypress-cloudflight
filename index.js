const resolvePath = require('resolve-package-path');
const path = require('path');

const cloudflightPower = (on) => {
    on('before:run', async () => {
        const terminal = await import('terminal-image');
        const filePath = path.dirname(resolvePath('cypress-cloudflight', '.'));
        console.log(await terminal.default.file(filePath + '/cloudflight.png'));
    });
}

module.exports = cloudflightPower;