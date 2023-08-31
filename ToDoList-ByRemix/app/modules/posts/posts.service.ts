import { PrismaClient } from "@prisma/client";
import { updatePostSchema } from "./posts.schema";
import { z } from "zod";



const prisma = new PrismaClient();

export async  function getPosts(title: string) {
    return await prisma.post.findMany({
        where: {
            title: {
                contains: title
            }
        },
        orderBy: {
            id: 'desc'
        }
    })
}

export async function createPost(data: any) {
    const dataPost = await prisma.post.create({
        data : data,
    })
    return dataPost
}

export async function deletePost(Id: any) {
    return prisma.post.delete({
        where: {
            id: parseInt(Id)
        }
    })
}

export async function updatePost(postId: number, updatedTitle: string) {
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
  




