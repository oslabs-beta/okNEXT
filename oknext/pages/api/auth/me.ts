import { handleProfile } from "@auth0/nextjs-auth0";
import { NextApiRequest, NextApiResponse } from "next";

const profileHandler = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    await handleProfile(req, res);
  } catch (error) {
    res.status(error.status || 400).end('from auth.me handler', error.message);
  }
};

export default profileHandler;