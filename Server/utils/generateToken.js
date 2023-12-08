import jwt from "jsonwebtoken";
const generateToken = (userId) => {
  const secret = process.env.JWT_SECRET || 'Secret'; // Your JWT secret, use a strong secret in production
  // Payload for the JWT, you can include any data you want
  const payload = {
    id: userId,
    // Other data you want to include in the token
  };

  // Options for the JWT, such as expiration time
  const options = {
    expiresIn: '30d', // Token will expire in 1 hour, adjust as needed
  };

  // Sign the token using the secret and return it
  return jwt.sign(payload, secret, options);
};


export default generateToken;
