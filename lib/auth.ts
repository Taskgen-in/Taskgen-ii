import jwt from "jsonwebtoken";
const SECRET = process.env.JWT_SECRET || "changeme"; // Use a strong secret in production!

export function signJWT(payload: any) {
  return jwt.sign(payload, SECRET, { expiresIn: "7d" });
}

export function verifyJWT(token: string) {
  try {
    return jwt.verify(token, SECRET) as any;
  } catch {
    return null;
  }
}
