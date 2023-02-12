import {buildApp, launchApp} from "../app/app";
import {Express} from "express";
import request from 'supertest'

// USES PORT 8081

describe("Testing app.ts", () => {
    describe("Testing app.ts/buildApp()", ()=> {
        // Subject to change due to dependency injection not configured yet
        test("expect buildApp() to return a Express app", () => {
            expect(buildApp()).toBeDefined()
        })
    })
    describe("Testing app.ts/launchApp()", ()=> {
        let app: Express;
        beforeAll(() => {
            app = buildApp()
        })

        test("expect launchApp() to return object", () => {
            const server = launchApp(app, 8081)
            expect(server).toBeDefined()
            server.close()
        })

        test("expect launchApp() to launch app", async () => {
            const server = launchApp(app, 8081)
            const response = await request(app).get("/")
            expect(response.statusCode).toBe(200)
            server.close()
        })

        test("expect launchApp() to launch app on correct port", async () => {
            const server = launchApp(app, 8081)
            // @ts-ignore
            expect(server.address()?.port).toBe(8081)
            server.close()
        })

        test("expect launchApp() to throw error when port is not 4 digits", () => {
            expect(() => {
                launchApp(app, 808)
            }).toThrow(Error)
            expect(() => {
                launchApp(app, 80834)
            }).toThrow(Error)
        })
    })
})