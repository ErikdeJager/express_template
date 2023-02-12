import express, {Express} from 'express';
import {digitLength} from "./utils/utils";

/**
 * Creates an instance of an Express app and sets up the necessary middleware.
 *
 * @returns {Express} The created Express app
 *
 * @example
 * const app = buildApp();
 */
export function buildApp() {
    const app = express();
    app.use(express.json());

    return app;
}

/**
 * Launches the given Express app and starts listening on a specified port.
 *
 * @param {Express} app - The Express app to launch
 * @param {number} [port=8080] - The port number to listen on
 * @returns {express.Application} The launched Express app
 *
 * @throws {Error} If the specified port is not 4 digits
 *
 * @example
 * launchApp(app, 8080);
 */
export function launchApp(app: Express, port?: number) {
    port = port || 8080;
    if (digitLength(port) != 4) {
        throw Error("Port must be 4 digits")
    }

    app.get("/", (req, res) => {
        res.send("Hello from ANYbets")
    })

    return app.listen(port, () => {
        console.log("App is listening on port " + port)
    })
}