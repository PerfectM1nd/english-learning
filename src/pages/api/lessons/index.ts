import {NextApiRequest, NextApiResponse} from 'next';

import prisma from '$/prisma';
import {HttpMethodEnum} from '$/enums';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === HttpMethodEnum.PATCH) {
    const editLesson = req.body;

    const result = await prisma.lesson.update({
      where: {
        id: editLesson.id
      },
      data: {
        level: editLesson.level,
        title: editLesson.title
      }
    });

    res.json(result);
  }

  if (req.method === HttpMethodEnum.POST) {
    const body = req.body;

    const result = await prisma.lesson.create({
      data: {
        level: body.level,
        title: body.title
      }
    });

    res.json(result);
  }
}