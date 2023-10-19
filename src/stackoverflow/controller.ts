import { Request, Response } from "express";
import { StackOverflowService } from "./service";
import { StackOverflowClient } from "../utils/stackOverflowClient";

const stackOverflowService: StackOverflowService = new StackOverflowService(new StackOverflowClient());

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
    const response = stackOverflowService.fetchStackOverflowUserInformation(req.params.id);
    res.json(response);
  } catch (err) {
    res.json({
      message: err,
      status: 400,
    });
  }
};
