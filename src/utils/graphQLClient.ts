import { GITHUB_GRAPHQL_ROOT } from "./constants";
import * as dotenv from "dotenv";
dotenv.config({ path: `.env` });

export class GitHubClient {
  async query(body: string): Promise<any> {
    return await fetch(GITHUB_GRAPHQL_ROOT, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.BEARER_TOKEN}`,
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({ query: body }),
    });
  }
}

const gitHubClient: GitHubClient = new GitHubClient();

export default gitHubClient;
