#!/usr/bin/node
/* Script that prints 3 lines:(like '1-multi_languajes.js') but using an array
 * of string and a loop */
const items = ['C is fun', 'Python is cool', 'JavaScript is amazing'];
for (let i = 0; items[i] !== undefined; i++) {
  console.log(items[i]);
}
