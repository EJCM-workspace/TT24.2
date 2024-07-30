import {faker} from '@faker-js/faker/locale/pt_BR';
import { PrismaClient } from '@prisma/client';
import auth from '../../config/auth';

const prisma = new PrismaClient();

interface User {
    name: string;
    email: string;
    hash: string;
    salt: string;
    gender: string;
    bornData: Date;
}

let data: User[] = [];

for (let i = 0; i < 1000; i++) {
    const birthdate = faker.date.birthdate().toISOString().split('T')[0];
    const password = faker.internet.password();
    const {hash, salt} = auth.generatePassword(password);
    data.push({
        name: faker.person.fullName(),
        email: faker.internet.email(),
        hash: hash,
        salt: salt,
        gender: faker.person.gender(),
        bornData: new Date(birthdate)
    });
}

export async function seed() {
    await prisma.user.createMany({data});
}