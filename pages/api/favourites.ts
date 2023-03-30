import serverAuth from "@/lib/serverAuth";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "GET") {
    return res.status(400).end();
  }

  try {
    const { currentUser } = await serverAuth(req);

    const favourites = await prismadb.movie.findMany({
      where: {
        id: {
          in: currentUser?.favouriteIds,
        },
      },
    });

    return res.status(200).json(favourites);
  } catch (error) {
    console.log(error);
    res.status(400).end();
  }
}
