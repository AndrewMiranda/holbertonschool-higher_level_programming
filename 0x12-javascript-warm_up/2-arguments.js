#!/usr/bin/node
/* Script that prints a message depending of the number of arguments passed: */
const length = process.argv.length;
if (length === 2) console.log('No argument');
else if (length === 3) console.log('Argument found');
else console.log('Arguments found');
