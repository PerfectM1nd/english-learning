import {NextApiRequest, NextApiResponse} from 'next';
import prisma from '@/prisma';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'DELETE') {
    const lessonSentenceId = req.query.lessonSentenceId as string;

    const result = await prisma.lessonSentence.delete({
      where: {
        id: Number.parseInt(lessonSentenceId)
      }
    });

    res.json(result);
  }

  if (req.method === 'PATCH') {
    const editLessonSentence = req.body;

    const result = await prisma.lessonSentence.update({
      where: {
        id: editLessonSentence.id
      },
      data: {
        lessonId: editLessonSentence.lessonId,
        englishText: editLessonSentence.englishText,
        russianText: editLessonSentence.russianText,
        mistaken: editLessonSentence.mistaken
      }
    });

    res.json(result);
  }

  if (req.method === 'POST') {
    const body = req.body;

    const result = await prisma.lessonSentence.create({
      data: {
        lessonId: body.lessonId,
        englishText: body.englishText,
        russianText: body.russianText,
        mistaken: body.mistaken
      }
    });

    res.json(result);
  }
}