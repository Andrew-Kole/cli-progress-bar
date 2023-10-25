const cliProgress = require("cli-progress");
const fs = require("node:fs");

const filepath = "./files/free_company_dataset.csv";

function readFileWithProgressBar(filepath) {
  const fileSize = fs.statSync(filepath).size;
  const readStream = fs.createReadStream(filepath);
  let readed = 0;

  const progressBar = new cliProgress.SingleBar({
    format: "Progress [{bar}] {percentage}% | ETA: {eta}s | {value}/{total}",
    barCompleteChar: "\u2588",
    barIncompleteChar: "\u2591",
    hideCursor: true,
  });
  progressBar.start(fileSize, 0);
  readStream.on("data", (chunk) => {
    readed += chunk.length;
    progressBar.update(readed);
  });
  readStream.on("end", () => {
    progressBar.stop();
  });
  readStream.on("error", (error) => {
    progressBar.stop();
    // eslint-disable-next-line no-console
    console.error("Failed: ", error);
  });
}

readFileWithProgressBar(filepath);
