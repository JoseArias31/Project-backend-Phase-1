/* MODULE 2 */

/* Types of printing and delivery Services */
export function delivery(size, num, total){
    if((size === "letter" || size === "legal") && num >= 50 && total >= 1000){
        return (`The package includes ${num} pages ${size} size with a total of $${total}, the price for delivery is free!`)
}

else if((size === "letter" || size === "legal") && num <= 50 && total <= 1000){
     return(`The package includes ${num} pages ${size} size with a total of $${total}, the price for delivery is $${total * 0.1}.`)
}
else {
    return("Invalid parameters for delivery calculations")
}

}


