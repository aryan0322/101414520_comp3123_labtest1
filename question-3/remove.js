const fs = require('fs');
const path = require('path');

// gets the path of directory
const logsDirectory = path.join(process.cwd(), 'Logs');

// Checks if log directory exists or not
if (fs.existsSync(logsDirectory)) {
    // Read all files in the Logs directory
    fs.readdirSync(logsDirectory).forEach(file => {
        const filePath = path.join(logsDirectory, file);
        // Deletes each file
        fs.unlinkSync(filePath);
        console.log(`delete files...${file}`);
    })
    // Remove the Logs directory
    fs.rmdirSync(logsDirectory);
    console.log('Logs directory removed');
} else {
    console.log('Logs directory does not exist');
}