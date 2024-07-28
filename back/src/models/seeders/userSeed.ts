import {faker} from '@faker-js/faker/locale/pt_BR';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

interface User {
    name: string;
    email: string;
    password: string;
    gender: string;
    bornData: Date;
}

let data: User[] = [];

for (let i = 0; i < 1000; i++) {
    const birthdate = faker.date.birthdate().toISOString().split('T')[0];
    data.push({
        name: faker.person.fullName(),
        email: faker.internet.email(),
        password: faker.internet.password(),
        gender: faker.person.gender(),
        bornData: new Date(birthdate)
    });
}

export async function seed() {
    await prisma.user.createMany({data});
}