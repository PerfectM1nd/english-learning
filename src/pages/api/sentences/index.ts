import {NextApiRequest, NextApiResponse} from "next";
import prisma from "@/prisma";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const body = req.body;

  const result = await prisma.sentence.create({
    data: {
      sentence: body.sentence,
      wordId: body.word.id
    }
  })

  res.json(result)
}