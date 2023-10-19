import { GITHUB_GRAPHQL_ROOT } from "./constants";
import * as dotenv from "dotenv";
import {GitHubResponse} from "../api/github/models/response";
dotenv.config({ path: `.env` });

export class GitHubClient {
  async query(body: string): Promise<GitHubResponse> {
    const res = await fetch(GITHUB_GRAPHQL_ROOT, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.BEARER_TOKEN}`,
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({ query: body }),
    });
    return res.json();
  }
}

const gitHubClient: GitHubClient = new GitHubClient();

export default gitHubClient;
