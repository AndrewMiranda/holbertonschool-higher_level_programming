#!/usr/bin/node
/* Script that prints a square with the letter 'X' */
const num = parseInt(process.argv[2]);
if (num === undefined || isNaN(num)) {
  console.log('Missing size');
} else {
  for (let i = 0; i < num; i++) {
    console.log('X'.repeat(num));
  }
}
