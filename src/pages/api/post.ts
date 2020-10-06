import { NextApiRequest, NextApiResponse } from "next";
import { PostResponse } from "../../types/api/Post";

const data: PostResponse = [
  { id: 1, content: "hey", userId: 1 },
  { id: 2, content: "hey hey", userId: 1 },
  { id: 3, content: "hey hey hey", userId: 1 },
];

const getPostByUserId = (req: NextApiRequest, res: NextApiResponse) => {
  res.status(200).json(data);
};

export default getPostByUserId;
