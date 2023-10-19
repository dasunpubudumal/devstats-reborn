import gitHubClient, { GitHubClient } from "../utils/graphQLClient";
import { GitHubUserDetailsResponse } from "./models/response";

export class GitHubService {

  constructor(private gitHubClient: GitHubClient) {
    // empty constructor
  }

  async fetchGitHubUserInformation(userId: string): Promise<GitHubUserDetailsResponse> {
    const results = await this.gitHubClient.query(
      `query User {
        user(login: "${userId}") {
          name,
          login,
          id,
          isCampusExpert,
          isHireable,
          location,
          pronouns,
          avatarUrl,
          followers {
            totalCount
          },
          status {
            emoji
          },
          gists {
            totalCount
          },
          websiteUrl,
          twitterUsername,
          topRepositories(first: 5, orderBy: { field: NAME, direction: ASC }) {
            totalCount
            nodes {
              name,
              description,
              url,
              pushedAt,
              primaryLanguage {
                id,
                name
              }
              homepageUrl,
              isFork,
              languages {
                totalCount,
                nodes {
                  id,
                  name
                }
              }
              collaborators(first: 5) {
                totalCount
                nodes {
                  id,
                  name,
                  url,
                  avatarUrl
                }
              }
            }
          }
        }
      }
    `
    );
    const response = await results.json();
    if (response) {
      console.log(`Returning response`);
      return response.data;
    }
    throw new Error(`Response from GitHub API: ${JSON.stringify(results)}`);
  };
}
