import type { NextApiRequest, NextApiResponse } from 'next'
import lanes from "@/data/lanes.json"

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  res.status(200).json(lanes)
}

