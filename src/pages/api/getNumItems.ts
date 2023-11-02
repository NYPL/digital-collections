import type { NextApiRequest, NextApiResponse } from "next";

const getNumItems = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "GET") {
    const { uuid } = req.query;
    const apiUrl = `https://api.repo.nypl.org/api/v2/collections/${uuid}/items`;
    const apiKey = process.env.AUTH_TOKEN;

    try {
      const response = await fetch(apiUrl, {
        headers: {
          Authorization: `Token token=${apiKey}`,
        },
      });

      if (response.status === 200) {
        const data = await response.json();
        const numItems = data.nyplAPI.response.numItems;
        res.status(200).json({ numItems });
      } else {
        res.status(response.status).end();
      }
    } catch (error) {
      res.status(500).json({ error: "Internal server error" });
    }
  } else {
    res.status(405).end();
  }
};

export default getNumItems;
