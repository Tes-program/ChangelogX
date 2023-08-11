import prisma from "../db";
import { hashPassword, createJWT, comparePassword } from "../modules/auth";

// Create a user and return a JWT and make it expire in 30 minutes

export const createUser = async (req, res, next) => {
  try {
    const user = await prisma.user.create({
      data: {
        username: req.body.username as string,
        password: (await hashPassword(req.body.password)) as string,
      },
    });

    const token = createJWT(user);
    res.json({ token });
  } catch (e) {
    e.type = "input";
    next(e);
  }
};

export const loginUser = async (req, res) => {
  const user = await prisma.user.findUnique({
    where: {
      username: req.body.username as string,
    },
  });

  const isValid = await comparePassword(req.body.password, user.password);

  if (!isValid) {
    res.status(401);
    res.json({ message: "Invalid credentials" });
    return;
  }

  const token = createJWT(user);
  res.json({ token });
};
