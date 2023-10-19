import { Request, Response } from "express";
import { GitHubUserDetailsResponse } from "../github/models/response";
import { GitHubService } from "./service";
import { GitHubClient } from "../utils/graphQLClient";

const gitHubService: GitHubService = new GitHubService(new GitHubClient());

/**
 * Handles /github/user/:id endpoint that fetches information from GitHub
 * @param req incoming request
 * @param res outgoing response
 */
export const loadInformation = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    if (req.params.id) {
      const result: GitHubUserDetailsResponse =
        await gitHubService.fetchGitHubUserInformation(req.params.id);
      res.json({ ...result });
    }
  } catch (err: any) {
    res.json({
      data: "Bad Request",
      status: 400,
    });
  }
};
