#!/usr/bin/node
/* Script that prints the first argument passed to it: */
arg = process.argv[2];
if (arg === undefined) console.log('No argument');
else console.log(arg);
