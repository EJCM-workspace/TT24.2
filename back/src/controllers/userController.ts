import { Request, Response } from "express";
import { Prisma, PrismaClient } from "@prisma/client";
import { sendEmail } from "../config/mailer";

const prisma = new PrismaClient();

class userController {
  async create(req: Request, res: Response) {
    try {
      const { name, email, password, gender, bornData } = req.body;
      const [day, month, year] = bornData.split("/");
      console.log(day, month, year);
      const bornDataFormat = new Date(`${year}-${month}-${day}`);
      const UserInput: Prisma.UserCreateInput = {
        name: name,
        email: email,
        password: password,
        gender: gender,
        bornData: bornDataFormat,
      };


      const user = await prisma.user.create({
        data: UserInput,
      });

      sendEmail(user.email,"Boas Vindas","Bem-vindo à rede social!")

      return res.status(201).json(user);
    } catch (error) {
      return res.status(500).json({ error: error });
    }
  }

  async index(req: Request, res: Response) {
    try {
      const users = await prisma.user.findMany();
      return res.status(200).json(users);
    } catch (error) {
      return res.status(500).json({ error: error });
    }
  }

  async show(req: Request, res: Response) {
    try {
      const { email, name, gender, bornData } = req.query;
      let bornDateFormat;
      if (bornData) {
        const [day, month, year] = bornData.toString().split("/");
        bornDateFormat = new Date(`${year}-${month}-${day}`);
        console.log(bornDateFormat);
      }
      const user = await prisma.user.findMany({
        where: {
          AND: [
            email ? { email: email.toString() } : {},
            name ? { name: name.toString() } : {},
            gender ? { gender: gender.toString() } : {},
            bornDateFormat ? { bornData: bornDateFormat } : {},
          ],
        },
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
      let bornDateFormat;
      if (bornData) {
        const [day, month, year] = bornData.toString().split("/");
        bornDateFormat = new Date(`${year}-${month}-${day}`);
        console.log(bornDateFormat);
      }
      const user = await prisma.user.findUnique({
        where: {
          id: Number(id),
        },
      });
      if (!user) {
        return res.status(404).json({ error: "User not found" });
      }
      const UserInput: Prisma.UserUpdateInput = {
        email: email,
        name: name,
        password: password,
        gender: gender,
        bornData: bornDateFormat,
      };
      const userUpdated = await prisma.user.update({
        data: UserInput,
        where: {
          id: Number(user.id),
        },
      });
      return res.status(200).json(userUpdated);
    } catch (error) {
      return res.status(500).json({ error: error });
    }
  }

  async delete(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const user = await prisma.user.delete({
        where: {
          id: Number(id),
        },
      });
      return res.status(200).json(user);
    } catch (error) {
      return res.status(500).json({ error: error });
    }
  }

  async follow(req: Request, res: Response) {
    try {
      const { userId } = req.params;
      const { followId } = req.body;
      const user = await prisma.user.findUnique({
        where: {
          id: Number(userId),
        },
      });
      if (!user) {
        return res.status(404).json({ error: "User not found" });
      }
      const followed = await prisma.user.findUnique({
        where: {
          id: Number(followId),
        },
      });
      if (!followed) {
        return res.status(404).json({ error: "Follow not found" });
      }
      const followUser = await prisma.user.update({
        where: {
          id: Number(user.id),
        },
        data: {
          follows: {
            connect: {
              id: Number(followed.id),
            },
          },
        },
      });
      return res.status(200).json(followUser);
    } catch (error) {
      return res.status(500).json({ error: error });
    }
  }

  async unfollow(req: Request, res: Response) {
    try {
      const { userId } = req.params;
      const { followId } = req.body;
      const user = await prisma.user.findUnique({
        where: {
          id: Number(userId),
        },
      });
      if (!user) {
        return res.status(404).json({ error: "User not found" });
      }
      const followed = await prisma.user.findUnique({
        where: {
          id: Number(followId),
        },
      });
      if (!followed) {
        return res.status(404).json({ error: "Follow not found" });
      }
      const unfollowUser = await prisma.user.update({
        where: {
          id: Number(user.id),
        },
        data: {
          follows: {
            disconnect: {
              id: Number(followed.id),
            },
          },
        },
      });
      return res.status(200).json(unfollowUser);
    } catch (error) {
      return res.status(500).json({ error: error });
    }
  }

  async showFollowers(req: Request, res: Response) {
    try {
      const { userId } = req.params;
      const user = await prisma.user.findUnique({
        where: {
          id: Number(userId),
        },
        include: {
          followedBy: true,
        },
      });
      if (!user) {
        return res.status(404).json({ error: "User not found" });
      }
      return res.status(200).json(user);
    } catch (error) {
      return res.status(500).json({ error: error });
    }
  }

  async showFollowing(req: Request, res: Response) {
    try {
      const { userId } = req.params;
      const user = await prisma.user.findUnique({
        where: {
          id: Number(userId),
        },
        include: {
          follows: true,
        },
      });
      if (!user) {
        return res.status(404).json({ error: "User not found" });
      }
      return res.status(200).json(user);
    } catch (error) {
      return res.status(500).json({ error: error });
    }
  }

  async sendEmailToUser(req: Request, res: Response) {
    try {
      const { userId } = req.params;
    //   const user = await prisma.user.findUnique({
    //     where: {
    //       id: Number(userId),
    //     },
    //   });

    //   if (!user) {
    //     return res.status(404).json({ error: "User not found" });
    //   }


      
    sendEmail("socratesfreitas1@gmail.com","Teste Nodemail","Funcionou, chefe!")

      return res.status(200).json({message:"Tudo Certo, chefia"});
    } catch (error) {
      return res.status(500).json({ error: error });
    }
  }
}

export default new userController();
