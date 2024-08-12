import jwt from "jsonwebtoken";

// send token
export const sendToken = async (user: any, res: any) => {
  const accessToken = jwt.sign(
    { id: user.id },
    process.env.ACCESS_TOKEN_SECRET!,
    {
      expiresIn: "30d",
    }
  );
  res.status(201).json({
    success: true,
    accessToken,
    user,
  });
};
