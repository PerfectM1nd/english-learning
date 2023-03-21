import {NextApiRequest, NextApiResponse} from 'next';
import prisma from '@/prisma';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'PATCH') {
    const editSentence = req.body;

    const result = await prisma.sentence.update({
      where: {
        id: editSentence.id
      },
      data: {
        text: editSentence.text
      }
    });

    res.json(result);
  }

  if (req.method === 'POST') {
    const body = req.body;

    const result = await prisma.sentence.create({
      data: {
        text: body.text,
        wordId: body.wordId
      }
    });

    res.json(result);
  }
}