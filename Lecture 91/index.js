const extensions = ['png' , 'txt' , 'cs' , 'zip']
const { error } = require('console');
const fs = require('fs');
const path = require('path');

const rootDir = 'C:/Users/Haseeb/Desktop/sigmawebdevcourse/Lecture 91/';

for (let index = 0; index < extensions.length; index++) {
    const folderPath = path.join(rootDir, extensions[index]);
    if(fs.existsSync(folderPath)){
        console.log(`Folder ${extensions[index]} already exists`);
    }
    else {
        console.log(`Folder ${extensions[index]} does not exist, creating...`);
        fs.mkdirSync(folderPath); 
    }
    
}

fs.readdir(rootDir, (err, files) => {
    if (err) {
        console.error('Error reading directory:', err);
        return;
    }

    files.forEach(file =>{
        const ext = path.extname(file).substring(1);
        console.log(`Extension of the file is ${ext}`);
        // Check if the file extension matches one of the extensions in the list
        if(extensions.includes(ext)) {
            const oldPath = path.join(rootDir, file);
            const newPath = path.join(rootDir, ext, file);

            // Move the file to the corresponding folder

            fs.rename(oldPath, newPath, (err) => {
                if (err) {
                    console.error(`Error moving file ${file}:`, err);
                } else {
                    console.log(`Moved file ${file} to folder ${ext}`);
                }
            })
        }
                       
    })
    
    
});
// if(fs.existsSync('C:\\Users\\Haseeb\\Desktop\\sigmawebdevcourse\\Lecture 91\\png')){
//     console.log("Current directory is " + __dirname);
//     console.log("Folder already exist");
// }
// else {
//     console.log('Folder Doesnt Exist');
//     fs.mkdirSync('C:/Users/Haseeb/Desktop/sigmawebdevcourse/Lecture 91/png');
    
// }
