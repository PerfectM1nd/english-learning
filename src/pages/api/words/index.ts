import {NextApiRequest, NextApiResponse} from 'next';

import prisma from '$/prisma';
import {HttpMethodEnum} from '$/enums';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  
  if (req.method === HttpMethodEnum.PATCH) {
    const editWord = req.body;

    const result = await prisma.word.update({
      where: {
        id: editWord.id
      },
      data: {
        text: editWord.text,
        audioUrl: editWord.audioUrl
      }
    });

    res.json(result);
  }

  if (req.method === HttpMethodEnum.POST) {
    const word = req.body;

    const result = await prisma.word.create({
      data: {
        text: word.text,
        audioUrl: word.audioUrl
      }
    });

    res.json(result);
  }
}