import { Request, Response } from "express";
import { fetchStackOverflowUserInformation } from "./service";
import { StackOverflowUser } from "./models/response";

/**
 * Handles /stackoverflow/user/:id endpoint that fetches information from StackExchange API
 * @param req incoming request
 * @param res outgoing response
 */
export const loadInformation = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const response: StackOverflowUser = await fetchStackOverflowUserInformation(
      req.params.id
    );
    res.json(response);
  } catch(err) {
    res.json(
      {
        message: err,
        status: 400
      }
    );
  }
};
