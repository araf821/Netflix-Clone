import prismadb from "@/lib/prismadb";
import serverAuth from "@/lib/serverAuth";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    if (req.method === "POST") {
      const { currentUser } = await serverAuth(req);
      const { movieId } = req.body;
      const existingMovie = await prismadb.movie.findUnique({
        where: {
          id: movieId,
        },
      });

      if (!existingMovie) {
        throw new Error("Invalid ID.");
      }

      const user = await prismadb.user.update({
        where: {
          email: currentUser.email || "",
        },
        data: {
          favouriteIds: {
            push: movieId,
          },
        },
      });

      res.status(200).json(user);
    }
  } catch (error) {
    console.log(error);
    res.status(400).end();
  }
}
