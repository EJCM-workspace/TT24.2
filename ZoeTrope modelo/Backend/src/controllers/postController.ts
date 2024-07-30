import { Request, Response } from "express";
import { Prisma, PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

class postController {
    async create(req: Request, res: Response) {
        try {
            const { title, content, userId } = req.body;
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
            const { id } = req.params;
            const user = await prisma.user.findUnique({
                where: {
                    id: Number(id)
                }
            });
            if (!user)
                return res.status(400).json({ error: "User not found" })


            const posts = await prisma.post.findMany({
                where: {
                    authorId: user.id
                },
                include: {
                    likedBy: true
                }
            });
            return res.status(200).json(posts);
        } catch (error) {
            return res.status(500).json({ error: error });
        }
    }

    async show(req: Request, res: Response) {
        try {
            const { id } = req.params;
            const post = await prisma.post.findUnique({
                where: {
                    id: Number(id)
                }
            });

            if (!post)
                return res.status(400).json({ error: "User not found" })

            const posts = await prisma.post.findUnique({
                where: {
                    id: post.id
                },
                include: {
                    likedBy: true
                }
            })
            return res.status(200).json(posts);
        } catch (error) {
            return res.status(500).json({ error: error });
        }
    }

    async update(req: Request, res: Response) {
        try {
            const { id } = req.params;
            const { title, content } = req.body;

            const post = await prisma.post.findUnique({
                where: {
                    id: Number(id)
                }
            });
            if (!post) {
                return res.status(404).json({ error: "Post not found" });
            }
            const PostInput: Prisma.PostUpdateInput = {
                title: title,
                content: content,
            };
            const postChanged = await prisma.post.update({
                data: PostInput,
                where: {
                    id: Number(post.id)
                }
            });
            return res.status(200).json(post);
        } catch (error) {
            return res.status(500).json({ error: error });
        }
    }

    async delete(req: Request, res: Response) {
        try {
            const { id } = req.params;
            const post = await prisma.post.findUnique({
                where: {
                    id: Number(id)
                }
            });
            if (!post) {
                return res.status(404).json({ error: "Post not found" });
            }
            const PostDeleted = await prisma.post.delete({
                where: {
                    id: Number(id)
                }
            });
            return res.status(204).json(PostDeleted);
        } catch (error) {
            return res.status(500).json({ error: error });
        }
    }

    async like(req: Request, res: Response) {
        try {
            const { id } = req.params;
            const { userId } = req.body;

            const user = await prisma.user.findUnique({
                where: {
                    id: Number(userId)
                }
            });
            if (!user) {
                return res.status(404).json({ error: "User not found" })
            }

            const post = await prisma.post.findUnique({
                where: {
                    id: Number(id)
                }
            });
            if (!post) {
                return res.status(404).json({ error: "Post not found" });
            }

            const likeCreateInput: Prisma.LikesCreateInput = {
                UserLiked: {
                    connect: {
                        id: user.id
                    }
                },
                PostLiked: {
                    connect: {
                        id: post.id
                    }
                }
            }

            const postLiked = await prisma.likes.create({
                data: likeCreateInput
            });
            return res.status(200).json(postLiked);
        } catch (error) {
            return res.status(500).json({ error: error });
        }
    }

    async dislike(req: Request, res: Response) {
        try {
            const { id } = req.params;
            const { userId } = req.body;

            const user = await prisma.user.findUnique({
                where: {
                    id: Number(userId)
                }
            });
            if (!user) {
                return res.status(404).json({ error: "User not found" })
            }

            const post = await prisma.post.findUnique({
                where: {
                    id: Number(id)
                }
            });
            if (!post) {
                return res.status(404).json({ error: "Post not found" });
            }

            const likeDeleted = await prisma.likes.delete({
                where: {
                    userId_postId: {
                        userId: user.id,
                        postId: post.id
                    }
                }
            })

            return res.status(204).json(likeDeleted);
        } catch (error) {
            return res.status(500).json({ error: error });
        }

    }
}

export default new postController;