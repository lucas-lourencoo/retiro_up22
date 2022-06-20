import { PrismaClient } from '@prisma/client';
import { NextApiRequest, NextApiResponse } from 'next';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const prisma = new PrismaClient();

  if (req.method === 'POST') {
    try {
      const inscription = await prisma.inscriptions.create({ data: req.body });
      return res.json(inscription);
    } catch (err) {
      return res.status(500).send(err.message);
    }
  }

  if (req.method === 'GET') {
    try {
      const inscription = await prisma.inscriptions.findMany({});
      return res.json(inscription);
    } catch (err) {
      return res.status(500).send(err.message);
    }
  }

  return res.status(405).json({ message: 'Invalid method' });
};
