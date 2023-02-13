# Express Template
A template for quickly creating Express applications by Erik de Jager \
[Visit Erik's Github Profile](https://github.com/ErikdeJager)

## Getting Started

1. Run `npm install` to install the necessary dependencies.
2. Run `npm run test` to run tests (this will automatically run `npm run build`).
3. Run `npm run serve` to build and start the project. You can also run `npm run start` to start the project without rebuilding.
4. Run `npm run docker` to start a local postgresql database

## How it works

* The server runs Express in a Node.js environment. The `app.ts` file has functions that build the Express application. To add functionality (e.g., routes or HTTP methods), edit the `app.ts/buildApp()` function.
* `server.ts` launches the app. When you run `npm run serve` or `npm run start`, the server.ts file is executed, allowing you to modify the default implementation of the Express template by injecting dependencies into the `buildApp()` function.
  * An interface with a configurable argument can be created and passed to the `buildApp()` function to achieve this.
* Test files (ending with .test.ts) do not use `server.ts`. Instead, they use the functions in `app.ts` to build their own version of the Express app. If a test file needs to start the Express server for testing, use the `app.ts` functions to do so. You can use existing test files (e.g., `app.test.ts`) as examples.
* It's important to launch the server on a unique port for each test file. If multiple test files use the same port, they may fail unexpectedly. A recommended implementation assigns the first test file that requires server startup to port 8081, with subsequent tests incrementing the port number (8082, 8083, etc.).
* You can set a custom port when launching the Express server by passing a 4-digit number to the `launchApp()` function as an argument. If no port is specified, the server will run on port 8080.

## Dependencies

The following technologies are used in this template:

* Node.js
* Typescript
* Express
* Jest
* Supertest
* Dotenv
* Rimraf
* Babel
* Docker (postgresql)

Recommended dependencies for extension:
* TypeORM or Prisma: For making object relational mappings (just like in hibernate from Spring Boot)
* jsonwebtoken: For creating JWT tokens (Authentication)
* Bcrypt: For hashing passwords and other sensitive information

## Next steps

This project template can be used as is, but you may want to make some modifications to match your project requirements. Some changes you may consider making include:

1. Updating the project name:
   * In `package.json`, change the name from `express_template` to match your project name.
   * In `docker-compose.yml`, change the database name from `express_template` to match your project name.
2. Updating the project version:
   * In `package.json`, change the version number from `1.0.0` to match your desired version. 
3. Updating the project description:
   * In `package.json`, change the description to provide a more accurate summary of your project.
4. Updating the dependencies:
   * In `package.json`, change the dependencies section to match the technologies you want to use in your project.
5. Configuring the database:
   * In `docker-compose.yml`, update the database username and password to match your desired settings.
   * In `.env`, update the database connection settings to match the changes you made in `docker-compose.yml`. (or connect to another database of your choosing)
6. Customizing the Express app:
   * In `app.ts`, edit the `buildApp()` function to add the desired functionality (routes, HTTP methods, etc.). 
   * In `server.ts`, pass any necessary arguments to the `buildApp()` function to configure the Express app.

Finally, it's important to note that there is a workflow (`.github/workflows/main.yml`) configured for Github to run tests with every push and pull request. The workflow will:
* Check out the code
* Sets up Node.js
* Installs dependencies
* Runs all tests