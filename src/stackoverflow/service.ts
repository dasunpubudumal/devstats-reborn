import { STACKOVERFLOW_ROOT } from "../utils/constants";
import { StackOverflowClient } from "../utils/stackOverflowClient";
import { StackOverflowUser } from "./models/response";

export class StackOverflowService {
  constructor(private stackOverflowClient: StackOverflowClient) {}

  async fetchStackOverflowUserInformation(
    userId: string
  ): Promise<StackOverflowUser> {
    try {
      const response = await this.stackOverflowClient.query(userId);
      if (response && response.status != 200) {
        return Promise.reject();
      }
      const results = await response.json();
      return results;
    } catch (err) {
      return Promise.reject();
    }
  }
}
