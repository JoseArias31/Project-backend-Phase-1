export const double = a => a * 2;

export const rectangleArea = (width, height) => width * height;

export const hello = name => `Hello, ${name}`;

export const isMature = age => {
    if (age >= 18) {
        return true
    } 

    return false
}

export const iteratesOne = array => array.map((item) => {
    if(typeof item === "number"){
return item + 1;
} else {
    return null
}});

