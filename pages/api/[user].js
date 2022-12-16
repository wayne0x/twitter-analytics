import { getUseTx } from "../../src/utils/twitterApi";

export default async function handler(req, res) {
  const user= req.query;
  const userData = await getUseTx(user);
  res.status(200).json({ userData: userData })

  console.log(req.method,"测试看看")
}
