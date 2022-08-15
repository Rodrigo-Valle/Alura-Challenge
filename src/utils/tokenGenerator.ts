import * as jwt from "jsonwebtoken";

export const generateAuthToken = (id: string): string => {
        return jwt.sign({ id: id }, process.env.JWT_SECRET || "", { expiresIn: process.env.JWT_EXPIRES || 1 });
    }
