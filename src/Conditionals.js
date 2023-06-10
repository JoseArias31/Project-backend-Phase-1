/* MODULE 2 */

/* Types of printing and delivery Services */
import {firstClient as C1, secondClient as C2, thirdClient as C3} from './operations.js'



export function delivery(size, num, total){
    if(size === "letter" || size === "legal" && num >= 50 && total >= 1000){
        console.log(`The package includes ${num} pages ${size} size with a total of $${total}, the price for delivery is free!`)
}

else if(size === "letter" || size === "legal" && num <= 50 && total <= 1000){
    console.log(`The package includes ${num} pages ${size} size with a total of $${total}, the price for delivery is ${total * 0.1}.`)
}
else {
    console.log("Invalid parameters for delivery calculations")
}

}

export const deliveryResult1 = delivery(C1.size, C1.num, C1.total);
export const deliveryResult2 = delivery(C2.size, C2.num, C2.total);
export const deliveryResult3 = delivery(C3.size, C3.num, C3.total);
