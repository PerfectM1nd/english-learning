import {NextApiRequest, NextApiResponse} from 'next';

import prisma from '$/prisma';
import {HttpMethodEnum} from '$/enums';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === HttpMethodEnum.DELETE) {
    const lessonSentenceId = req.query.lessonSentenceId as string;

    const result = await prisma.lessonSentence.delete({
      where: {
        id: Number.parseInt(lessonSentenceId)
      }
    });

    res.json(result);
  }

  if (req.method === HttpMethodEnum.PATCH) {
    const editLessonSentence = req.body;

    const result = await prisma.lessonSentence.update({
      where: {
        id: editLessonSentence.id
      },
      data: {
        lessonId: editLessonSentence.lessonId,
        englishText: editLessonSentence.englishText,
        russianText: editLessonSentence.russianText,
        status: editLessonSentence.status,
        commentary: editLessonSentence.commentary
      }
    });

    res.json(result);
  }

  if (req.method === HttpMethodEnum.POST) {
    const body = req.body;

    const result = await prisma.lessonSentence.create({
      data: {
        lessonId: body.lessonId,
        englishText: body.englishText,
        russianText: body.russianText,
        status: body.status,
        commentary: body.commentary
      }
    });

    res.json(result);
  }
}