import { PrismaClient } from "@prisma/client";
import { updatePostSchema } from "./posts.schema";
import { z } from "zod";



const prisma = new PrismaClient();

export async  function getPosts(title: string) {
    return await prisma.post.findMany({
        where: {
            title: {
                contains: title,
            },
        },
        orderBy: {
            id: "desc",
        }
    })
}

export async function createPost(data: any, userId: string) {
    const dataPost = await prisma.post.create({ 
        data: {
            title: data.title,
            isDone: data.isDone,
            jokester: {
                connect: { id: userId }, // Connect the post to the specified user
            },
        },
    });

    return dataPost;
}


export async function deletePost(Id: string) {
    return prisma.post.delete({
        where: {
            id: Id
        }
    })
}

export async function updatePost(postId: string, updatedTitle: string) {
    const updatedPost = await prisma.post.update({
        where: {
            id: postId
        },
        data: {
            title: updatedTitle,
        }
    });
    return updatedPost;
}

export async function updateCheckPost(data: z.infer<typeof updatePostSchema>) {
    return await prisma.post.update({ data, where: { id: data.id } });
  }
  




