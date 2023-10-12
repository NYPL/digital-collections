import type { NextApiRequest, NextApiResponse } from 'next'
import Data from "@/data/lane1.json"

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  res.status(200).json(Data)
}
