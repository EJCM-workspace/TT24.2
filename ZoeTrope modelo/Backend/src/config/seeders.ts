import { PrismaClient } from "@prisma/client";
import { seed } from "../models/seeders/userSeed";

const prisma = new PrismaClient();

async function main() {
    await seed();
}

main()
    .then(() => {async () => await prisma.$disconnect()})
    .catch(async (e) => {
        console.error(e);
        await prisma.$disconnect();
        process.exit(1);
    });