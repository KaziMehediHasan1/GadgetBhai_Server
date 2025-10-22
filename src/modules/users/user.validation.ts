import { z } from "zod";

const userValidation = z.object({
  name: z.string().min(2, "Name must be at least 2 character"),
  email: z.string().email("Invalid email address"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

type userType = z.infer<typeof userValidation>

export { userValidation, userType };
