import {add, firstClient as C1, secondClient as C2, thirdClient as C3} from './operations.js' /*Import from the 1 Module */
import {delivery} from './Conditionals.js' /*Import from the 2 Module */

console.log("\n--------1st Test in classes---------\n")

console.log("Starting with Back-end already.")

console.log("\n--------2nd Test with a basic math operation---------\n")

console.log(add(2, 4));

console.log("\n---------3rd test, here I am implementing a conditional for my clients--------\n")

console.log(`First Client= "${delivery(C1.size, C1.num, C1.total)}"`);

console.log(`Second Client= "${delivery(C2.size, C2.num, C2.total)}"`);

console.log(`Third Client= "${delivery(C3.size, C3.num, C3.total)}"`);

console.log("\n-----------------\n")






