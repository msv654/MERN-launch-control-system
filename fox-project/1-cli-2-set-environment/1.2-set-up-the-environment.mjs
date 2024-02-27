import { exec } from 'child_process';

function versionChecker(tool) {
    return new Promise((resolve, reject) => {
        exec(`${tool} --version`, (stderr, stdout) => {
            if (stderr) {
                reject(
                    `${tool} doesn't exist on this device. \n${stderr.message}`
                );
            } else {
                console.log(`${tool} version: ${stdout}`);
                resolve();
            }
        });
    });
}

async function runVersionChecks() {
    try {
        await versionChecker('docker');
        await versionChecker('git');
        await versionChecker('npm');
        await versionChecker('nvm');
        await versionChecker('node');
    } catch (error) {
        console.error('Error:', error);
    }
}

runVersionChecks();
