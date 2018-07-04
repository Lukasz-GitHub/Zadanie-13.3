'use strict';

process.stdin.setEncoding('utf-8');
process.stdout.write('\nInstruction:\n1. /version - Show Info.\n2. /exit - Close App.\n');
process.stdin.on('readable', function () {
    var input = process.stdin.read();
    if (input !== null) {
        var instruction = input.toString().trim();
        switch (instruction) {
            case '/exit':
                process.stdout.write('Quitting app!\n');
                process.exit();
                break;
            case '/version':
                process.stdout.write('\nNode version: ' + process.versions.node + '\nModule number: ' + process.versions.modules + '\n');
                break;
            default:
                process.stderr.write('Wrong instruction!\n');
        }
    }
});


/*

// Przykład z if

process.stdin.setEncoding('utf-8');
process.stdin.on('readable', function () {
    var input = process.stdin.read();
    if (input !== null) {
        var instruction = input.toString().trim();
        if (instruction === '/exit') {
            process.stdout.write('Quitting app!\n');
            process.exit();
        } else if (instruction === '/versions') {
            console.log(process.versions)
        } else
            process.stderr.write('Wrong instruction!\n');
    }
});

    Inne sposoby wyświetlenia Node version:
    var version = process.versions.node;
    process.stdout.write('Node version: ' + version + '\n');
    console.log('Node version: ' + process.versions.node + '\n');
*/