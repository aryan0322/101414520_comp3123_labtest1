const fs = require('fs');
const path = require('path');

// gets the path of directory
const logsDirectory = path.join(process.cwd(), 'Logs');

// Create Logs directory if it doesn't exist
if (!fs.existsSync(logsDirectory)) {
    fs.mkdirSync(logsDirectory);
    console.log('Logs directory created.');
}

// Changes the current directory to logs
process.chdir(logsDirectory);

// Creating 10 log files
for (let i = 0; i < 10; i++) {
    const fileName = `log${i}.txt`;
    // write some text into these files
    fs.writeFileSync(fileName, `This is log file ${i}`);
    console.log(fileName); 
}