# **Phase 1, 2 & 3**:

1st Phase:

-Created a new GitHub repository named "Project-backend-Phase-1" for the backend development.
-Set up NPM for the project.
-Created an "index.js" file with a simple console.log("Starting with Backend already.") to initialize the backend.
-Marked the project as "private" in the repository settings.
-Set up the main file "index.js" in the "package.json" with the script "start": "node src/index.js" to easily run the backend.

2nd Phase:

-Created a new branch named "Phase 2" to begin work on the next phase.
-Developed two modules: "Conditionals.js" and "operations.js".

"Conditionals.js" contains a function with three parameters that uses conditional statements for logic.
"operations.js" includes a single line of code for a simple math operation and an object representing three fake clients.

-Configured the exporting and importing processes between the modules and the main file "index.js".
-Assigned the project to a classmate to receive feedback and suggestions.


3rd Phase:

-Once the second phase has been reviewed with no errors, I continued working on the steps to test my project. Here are the improvements made:

-Installed Jest, the JavaScript testing framework, using the following command in a new terminal:
Command: npm install jest --save-dev in a new terminal.

-Updated the "package.json" file to include a script for running tests with Jest. Since I'm using Windows as my operating system, the command is: 

"test": "node --experimental-vm-modules ./node_modules/jest/bin/jest.js --runInBand"
This ensures that ESM (ECMAScript Modules) work properly with Jest.

-Created a new file called "helper.js" to centralize all the main functions that will be tested.

-Created another file called "helper.spec.js" where I wrote the test functions based on the "helper.js" file.

-Used the import statement in the "helper.spec.js" file to connect the functions from the "helper.js" file. Instead of importing each function or variable individually, I used destructuring assignment to import them all at once:

import { double, rectangleArea, hello,isMature, iteratesOne } from "./helper.js"

-Wrote the test cases for the functions mentioned in the assignment, ensuring that they cover all the necessary scenarios.

-Finally, set up a Continuous Integration (CI) pipeline using GitHub to automatically check my code. This pipeline can be configured to run the tests and provide feedback on the code's quality.

-By following these steps, I established a robust testing setup using Jest and integrated it into a CI pipeline to ensure the reliability and quality of my code.



