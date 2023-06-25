# **Phase 1, 2 && 3**:

1st Phase=

-New GitHub Repository created as "Project-backend-Phase-1" 
-NPM already set up
-index.js created with a simple console.log("Starting with Back-end already.")
-Project is set as "private"
-The main file index.js is set up on the package.json with inside the script  "start": "node src/index.js" to run it easily.


2nd Phase=

-I created a new branch called "Phase 2" to start workin on it.
-I created 2 modules, Conditionals.js (All the logic is based on this module, it uses conditionales inside of a function with 3 parameters) and operations.js (This module has 1 line of code about a simple math operation and an object for 3 fake clients).
-Exporting and importing process are alredy set up with the main file index.js
-Preoject is assigned to a classmate to receive feedback.

3 Phase=

-Once 2 phase is already reviewed with no erros, I continue working on the steps to test my project.
-I started by installing "Jest" which is the framework for JavaScrip.
Command: npm install jest --save-dev in a new terminal.
-On my package.json I setup inside the script object a special flag to ensure ESM modules work for Jest. My operative system is Windows so the command for it is: "test": "node --experimental-vm-modules ./node_modules/jest/bin/jest.js --runInBand"
-I created a new file called helper.js to pasted all the main functions to start testing. 
-I created another file called helper.spec.js where I could use it to create the test functions based on the helper.js file.
-I used the import method inside the helper.spec.js to connect the functions made by the tutor:

-I know I can import one by one functions or variables however, I use the destructuring assignment to call them all at once:

import { double, rectangleArea, hello,isMature, iteratesOne } from "./helper.js"

-I used the describe function to test all the function made and talked in some point about: 

This is an example for the first function:

describe("Rectangle area calculations", () => {

})
-


