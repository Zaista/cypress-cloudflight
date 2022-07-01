import terminalImage from 'terminal-image';
export const cloudflightPower = async (on) => {
    on('before:run', async () => {
        const logoPath = new URL('./cloudflight.png', import.meta.url);
        console.log(await terminalImage.file(logoPath));
    });
}