import {NextApiRequest, NextApiResponse} from "next";
import prisma from "@/prisma";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const word = req.body;

  const result = await prisma.word.create({
    data: {
      word: word.word
    }
  })

  res.json(result)
}