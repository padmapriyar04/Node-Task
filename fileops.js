var fs = require('fs');
var data = 'hello';

fs.readFile('file1.txt', 'utf8', function(err, existingData) {
    if (err) {
        console.error('Error reading file:', err);
        return;
    }

    var updatedData = existingData + '\n' + data;

    fs.writeFile('file1.txt', updatedData, 'utf8', function(err) {
        if (err) {
            console.error('Error writing to file:', err);
            return;
        }
        console.log('Data has been appended and written to file.');
    });
});
