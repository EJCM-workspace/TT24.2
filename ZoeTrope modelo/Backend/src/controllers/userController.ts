import { Request, Response } from 'express';
import { Prisma, PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

class userController {
    async create(req: Request, res: Response) {
        try {
            const { name, email, password, gender, bornData } = req.body;
            const bornDataFormat = new Date(bornData);
            const UserInput: Prisma.UserCreateInput = {
                name: name,
                email: email,
                password: password,
                gender: gender,
                bornData: bornDataFormat
            };
            const user = await prisma.user.create({
                data: UserInput
            });
            return res.status(201).json(user);
        } catch (error) {
            return res.status(500).json({ error: error });
        }
    }

    async index(res: Response) {
        try {
            const users = await prisma.user.findMany();
            return res.json(users);
        } catch (error) {
            return res.status(500).json({ error: error });
        }
    }

    async show(req: Request, res: Response) {
        try {
            const { email, name, gender, bornData } = req.params;
            const bornDataFormat = new Date(bornData);
            const user = await prisma.user.findMany({
                where: {
                    AND: [
                        email ? { email: email } : {},
                        name ? { name: name } : {},
                        gender ? { gender: gender } : {},
                        bornData ? { bornData: bornDataFormat } : {}
                    ]
                }
            });
            return res.status(200).json(user);
        } catch (error) {
            return res.status(500).json({ error: error });
        }
    }

    async update(req: Request, res: Response) {
        try {
            const { id } = req.params;
            const { email, name, password, gender, bornData } = req.body;
            const bornDataFormat = new Date(bornData);
            const UserInput: Prisma.UserUpdateInput = {
                email: email,
                name: name,
                password: password,
                gender: gender,
                bornData: bornDataFormat
            }
            const user = await prisma.user.update({
                where: {
                    id: Number(id)
                },
                data: UserInput
            });

            if (!user) {
                return res.status(404).json({ error: 'User not found' });
            }

            return res.status(200).json(user);
        } catch (error) {
            return res.status(500).json({ error: error });
        }
    }

    async delete(req: Request, res: Response) {
        try {
            const { id } = req.params;
            const user = await prisma.user.delete({
                where: {
                    id: Number(id)
                }
            });
            return res.status(200).json(user);
        } catch (error) {
            return res.status(500).json({ error: error });
        }
    }
}