const cliProgress = require('cli-progress');

const progressBar = new cliProgress.SingleBar({
    format: 'Progress [{bar}] {percentage}% | ETA: {eta}s | {value}/{total}',
    barCompleteChar: '\u2588',
    barIncompleteChar: '\u2591',
    hideCursor: true,
});
const totalTasks = 100;

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function processTasks() {
    progressBar.start(totalTasks, 0);
    for(let i =0; i<=totalTasks; i++){
        progressBar.update(i++);
        await sleep(1000)
    }
    progressBar.stop();
    console.log('Done!')
}

processTasks();