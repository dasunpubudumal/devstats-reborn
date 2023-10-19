import {describe, expect, test} from "@jest/globals";
import {GitHubClient} from "../utils/graphQLClient";
import {anyString, instance, mock, when} from "ts-mockito";
import {GitHubService} from "../github/service";
import exp from "constants";
import {GitHubUserDetailsResponse} from "./models/response";

const response = {
    "data": {
        "user": {
            "name": "Dasun Pubudumal",
            "login": "dasunpubudumal",
            "twitterUsername": "@dasun",
            "id": "MDQ6VXNlcjI1NDg0OTE3",
            "isCampusExpert": false,
            "isHireable": true,
            "location": "Colchester, United Kingdom",
            "pronouns": "he/him",
            "avatarUrl": "https://avatars.githubusercontent.com/u/25484917?u=b272b0d5c58a950b8c60d5d692189273e43ec9d4&v=4",
            "followers": {
                "totalCount": 32
            },
            "status": {
                "emoji": ":house:"
            },
            "gists": {
                "totalCount": 27
            },
            "socialAccounts": {
                "totalCount": 2,
                "nodes": [
                    {
                        "displayName": "in/ dasun-pubudumal",
                        "provider": "LINKEDIN",
                        "url": "https://www.linkedin.com/in/ dasun-pubudumal"
                    },
                    {
                        "displayName": "https://medium.com/@dasunpubudumal",
                        "provider": "GENERIC",
                        "url": "https://medium.com/@dasunpubudumal"
                    }
                ]
            },
            "websiteUrl": "http://dasunpudumal.com/",
            "topRepositories": {
                "totalCount": 108,
                "nodes": [
                    {
                        "name": "project-muses",
                        "collaborators": {
                            "totalCount": 1,
                            "nodes": [
                                {
                                    "avatarUrl": "https://avatars.githubusercontent.com/u/25484917?u=b272b0d5c58a950b8c60d5d692189273e43ec9d4&v=4"
                                }
                            ]
                        }
                    },
                    {
                        "name": "invoice-test",
                        "collaborators": {
                            "totalCount": 2,
                            "nodes": [
                                {
                                    "avatarUrl": "https://avatars.githubusercontent.com/u/7416283?u=d16613f226b27539393d6f46d4a2e2c4ac9b30ba&v=4"
                                },
                                {
                                    "avatarUrl": "https://avatars.githubusercontent.com/u/25484917?u=b272b0d5c58a950b8c60d5d692189273e43ec9d4&v=4"
                                }
                            ]
                        }
                    },
                    {
                        "name": "dasunpubudumal.github.io",
                        "collaborators": {
                            "totalCount": 1,
                            "nodes": [
                                {
                                    "avatarUrl": "https://avatars.githubusercontent.com/u/25484917?u=b272b0d5c58a950b8c60d5d692189273e43ec9d4&v=4"
                                }
                            ]
                        }
                    },
                    {
                        "name": "academic-cv",
                        "collaborators": {
                            "totalCount": 1,
                            "nodes": [
                                {
                                    "avatarUrl": "https://avatars.githubusercontent.com/u/25484917?u=b272b0d5c58a950b8c60d5d692189273e43ec9d4&v=4"
                                }
                            ]
                        }
                    },
                    {
                        "name": "todo-app",
                        "collaborators": {
                            "totalCount": 1,
                            "nodes": [
                                {
                                    "avatarUrl": "https://avatars.githubusercontent.com/u/25484917?u=b272b0d5c58a950b8c60d5d692189273e43ec9d4&v=4"
                                }
                            ]
                        }
                    }
                ]
            },
            "recentProjects": {
                "totalCount": 0,
                "nodes": []
            },
            "organizations": {
                "nodes": [
                    {
                        "avatarUrl": "https://avatars.githubusercontent.com/u/6664684?v=4"
                    },
                    {
                        "avatarUrl": "https://avatars.githubusercontent.com/u/34195637?v=4"
                    }
                ]
            }
        }
    }
};
describe("Check whether GitHub fetch is working correctly", () => {

    let clientMock: GitHubClient = mock(GitHubClient);
    let client: GitHubClient = instance(clientMock);

    const service: GitHubService = new GitHubService(client);

    beforeEach(() => {
        return when(clientMock.query(anyString())).thenResolve(response);
    })

    test("Check correctly fetching github user", async () => {
        try {
            const response: GitHubUserDetailsResponse = await service.fetchGitHubUserInformation("dasunpubudumal");
            expect(response).toHaveProperty("user.name");
        } catch (err) {
            console.error(err);
        }
    })
});