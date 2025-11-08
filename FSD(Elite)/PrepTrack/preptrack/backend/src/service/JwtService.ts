import jwt from "jsonwebtoken";

export class JwtService {
  constructor() {}

  generateToken = (
    email: string,
    role: string,
    userId: string,
  ): string => {
    return jwt.sign({email, role, userId}, "t2WQRbR7bu/wfblKJwNGLHmAtGRbX6bSQgNWg4wbV9I=")
  };
}
