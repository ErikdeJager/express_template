# Express Template
A template for quickly setting up Express apps by Erik de Jager \
[Erik's Github Profile](https://github.com/ErikdeJager)

## Getting Started

1. `npm install` - to install the dependencies
2. `npm run db` - to run the postgresql dockerfile and migrate prisma with the database
3. `npm run test` - to run tests (will automatically run `npm run build`)
4. `npm run serve` - builds and starts the project (optionally you could run `npm run start` to only start the project without rebuilding )

## How it works

* The server runs express in a nodejs environment. 
`app.ts` has functions that can build the express app.
In order to add functionality (for example routes or HTTP methods)
you should edit the `app.ts/buildApp()` function.
* `server.ts` takes care of actually launching the app.
When you run commands such as `npm run serve` or `npm run start` the `server.ts` file gets executed
This way the default implementation of the express template can be changes by injecting dependencies into the `buildApp()` function.
* A recommended way to do this is by building an interface with a possible configuration and passing it as argument through the `buildApp()` function.
* The test files (ending with .test.ts) don't use `server.ts`, instead they use the functions in
`app.ts` to build their own version of the express app. 
If a test file needs to start the express server for testing
you need to use the `app.ts` functions to do so, you can use existing test files as examples (`app.test.ts`)
* Its important that every test launches the server on a unique port.
If some tests have the same port they may fail unexpectedly. \
The way it is currently implemented is by having the first test file that
requires server startup to launch on port 8081, all other tests are then
incremented (8082, 8083, ...etc)
* When launching the express server you can set a custom port 
by passing a 4-digit number into the `launchApp()` function as argument.
If no port was passed the server will launch on port 8080
* Its also good to know that there is a workflow (`.github/workflows/main.yml`) for github
configured to run with every push and pull_request. The workflow will:
  * Checkout the code
  * Start docker
  * Migrate with prisma
  * setup node
  * install dependencies
  * run all tests


## Dependencies

The technologies used in this template are

* NodeJS
* Typescript
* Express
* Jest
* Supertest
* Dotenv
* Rimraf
* Prisma
* Babel

Recommended dependencies for extension:
* jsonwebtoken: For creating JWT tokens (Authentication)
* Bcrypt: For hashing passwords and other sensitive information

## Next steps

This project template will launch as it is currently configured 
though you may want to change some variables to mach your project name

Things you may want to change:
* package.json:
  * name \
  The name of the project is currently set to `express_template`
  * version \
  The version of the project is currently set to `1.0.0`
  * description \
  Discribtion currently says `Template to quickly get started with an express app`
  * dependencies \
  Every dependency is currently set to `dependencies`, there are no `devDependencies`
* docker-compose.yml (postgresql database):
  * Database name: \
  The database name is currently set to `express_template`
  * Database password: \
  The database username and password are currently set to *user:`admin` pass:`admin`* 
  >Make sure that if you change these settings you also change the .env variable, this is where prisma gets its db connection from
* schema.prisma :
  * Models \
  There is currently a single model called `Example`. You can remove the `Example` model add your own models here
  >The test `connects to the database` in `prisma.test.ts` is dependent on the `Example` model.
  >Make sure to set a new model inside this test if you were to delete the `Example` model otherwise the test will fail.
  >Any other model will do.
* app.ts:
  * The function `buildApp()` currently doesn't take any arguments. 
  But you can set up this function to take (optional) arguments.
  This way you can change the app's implementation with dependency injection. \
  Don't use the `buildApp()` function to set the port for the express app. 
  This can already be done by passing an argument to the `launchApp()` function