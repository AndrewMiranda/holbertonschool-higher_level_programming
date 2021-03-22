#!/usr/bin/node
/* Script that prints a message depending of the number of arguments passed: */
Length = process.argv.length;
if (Length === 2) console.log('No argument');
else if (Length === 3) console.log('Argument found');
else console.log('Arguments found');
