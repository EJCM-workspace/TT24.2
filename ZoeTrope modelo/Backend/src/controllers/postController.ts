import { Request, Response } from "express";
import { Prisma, PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

class postController {
    async create(req: Request, res: Response) {
        try {
            const { userId } = req.params;
            const { title, content } = req.body;
            const user = await prisma.user.findUnique({
                where: {
                    id: Number(userId)
                }
            });
            if (!user) {
                return res.status(400).json({ error: 'User not found' });
            }
            const PostInput: Prisma.PostCreateInput = {
                title: title,
                content: content,
                author: {
                    connect: {
                        id: Number(user.id)
                    }
                }
            };
            const post = await prisma.post.create({
                data: PostInput
            });
            return res.status(201).json(post);
        } catch (error) {
            return res.status(500).json({ error: error });
        }
    }

    async index(req: Request, res: Response) {
        try {
            const posts = await prisma.post.findMany();
            return res.status(200).json(posts);
        } catch (error) {
            return res.status(500).json({ error: error });
        }
    }

    async show(req: Request, res: Response) {
        try {
            const { title, content, userId } = req.query;
            const post = await prisma.post.findMany({
                where: {
                    AND: [
                        title ? { title: title.toString() } : {},
                        content ? { content: content.toString() } : {},
                        userId ? { userId: Number(userId) } : {}
                    ]
                }
            });
            return res.status(200).json(post);
        } catch (error) {
            return res.status(500).json({ error: error });
        }
    }

    async update(req: Request, res: Response) {
        try {
            const { id } = req.params;
            const { title, content, userId } = req.body;
            const PostInput: Prisma.PostUpdateInput = {
                title: title,
                content: content,
                userId: userId,
            };
            const post = await prisma.post.update({
                where: {
                    id: Number(id)
                },
                data: PostInput
            });
            return res.status(200).json(post);
        } catch (error) {
            return res.status(500).json({ error: error });
        }
    }

    async delete(req: Request, res: Response) {
        try {
            const { id } = req.params;
            await prisma.post.delete({
                where: {
                    id: Number(id)
                }
            });
            return res.status(204).json();
        } catch (error) {
            return res.status(500).json({ error: error });
        }
    }
}