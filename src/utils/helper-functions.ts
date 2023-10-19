import { Request } from "express";
import { ValidationError } from "../errors/ValidationError";

export const validatePathParams = (req: Request, ...params: string[]) => {
  // validate if invalid throw error
};
