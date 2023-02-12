import {PrismaClient} from "@prisma/client";


describe('Prisma database connection test', () => {
    let prisma: any

    beforeAll(async () => {
        prisma = new PrismaClient()
    })

    afterAll(async () => {
        await prisma.$disconnect()
    })

    test('connects to the database', async () => {
        try {
            await prisma.example.findFirst()
            expect(true).toBe(true)
        } catch (err) {
            expect(err).toBeUndefined()
        }
    })
})
