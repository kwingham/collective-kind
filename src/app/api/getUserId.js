import { auth } from "@clerk/nextjs";

export default function handler(req, res) {
  const { userId } = auth();
  res.status(200).json({ userId });
}
