import {digitLength} from "../app/utils/utils";

describe("Testing utils.ts", () => {
    describe("Testing utils.ts/digitLength()", () => {
        test("expect digitLength() to return correct value", () => {
            expect(digitLength(100)).toEqual(3)
            expect(digitLength(10000)).toEqual(5)
        })
    })
})