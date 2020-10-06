import { NextApiRequest, NextApiResponse } from "next";
import { UserResponse } from "../../types/api/User";

const data: UserResponse = [
  { id: 1, name: "taro" },
  { id: 2, name: "hanako" },
  { id: 3, name: "jiro" },
  { id: 4, name: "saburo" },
  { id: 5, name: "takako" },
  { id: 6, name: "ichiro" },
  { id: 7, name: "mao" },
];

export default (req: NextApiRequest, res: NextApiResponse) => {
  res.status(200).json(data);
};
